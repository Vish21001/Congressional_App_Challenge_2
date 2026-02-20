"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link href={href} data-active={active ? "true" : "false"}>
      {label}
    </Link>
  );
}

export function Navbar() {
  return (
    <nav className="navbar">
      <Link className="logo" href="/">
        <span className="logo-icon" aria-hidden="true" />
        Student Helper
      </Link>

      <div className="nav-right">
        <div className="nav-links">
          <NavLink href="/" label="Home" />
          <NavLink href="/resources" label="Resources" />
          <NavLink href="/saved" label="Saved" />
        </div>

        <div className="auth-actions">
          <SignedOut>
            <SignInButton>
              <button className="nav-btn nav-btn-secondary">Sign in</button>
            </SignInButton>
            <SignUpButton>
              <button className="nav-btn nav-btn-primary">Sign up</button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
