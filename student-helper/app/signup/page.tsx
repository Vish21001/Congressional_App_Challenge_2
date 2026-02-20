"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "48px 16px" }}>
      <SignUp routing="path" path="/signup" />
    </div>
  );
}

