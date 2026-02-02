import { Webhook } from "svix";
import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs"; // important: svix verification needs node runtime

// 1) Supabase admin client (SERVICE ROLE — server only!)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const payload = await req.text();
  const headerList = await headers();

  const svix_id = headerList.get("svix-id");
  const svix_timestamp = headerList.get("svix-timestamp");
  const svix_signature = headerList.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing Svix headers", { status: 400 });
  }

  // 2) Verify the webhook signature
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let evt: any;
  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    return new Response("Invalid signature", { status: 400 });
  }

  const eventType = evt.type;
  const data = evt.data;

  // 3) Handle events
  if (eventType === "user.created" || eventType === "user.updated") {
    const clerkUserId = data.id as string;

    const email =
      data.email_addresses?.find((e: any) => e.id === data.primary_email_address_id)
        ?.email_address ?? null;

    const fullName =
      [data.first_name, data.last_name].filter(Boolean).join(" ") || null;

    // Upsert user row in Supabase
    const { error } = await supabase
      .from("users")
      .upsert(
        {
          id: clerkUserId,
          email,
          full_name: fullName,
          // role/profile_icon/onboarding defaults happen in DB
        },
        { onConflict: "id" }
      );

    if (error) return new Response(error.message, { status: 500 });
  }

  if (eventType === "user.deleted") {
    const clerkUserId = data.id as string;

    const { error } = await supabase.from("users").delete().eq("id", clerkUserId);
    if (error) return new Response(error.message, { status: 500 });
    }
    