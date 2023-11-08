"use client";
import { UserProfile } from "@clerk/clerk-react";
import { Settings2, Home } from "lucide-react";
import { dark } from "@clerk/themes";

export default async function Page() {
  return (
    <UserProfile
      appearance={{
        baseTheme: dark,
      }}
      path="/user-profile"
      routing="virtual"
    >
      <UserProfile.Page
        label="Custom Page"
        labelIcon={<Settings2 height={18} />}
        url="default"
      >
        <div>Custom Page</div>
      </UserProfile.Page>
      <UserProfile.Link
        label="Ir al Home"
        labelIcon={<Home height={18} />}
        url="/"
      />
      <UserProfile.Page label="account" />
      <UserProfile.Page label="security" />
    </UserProfile>
  );
}
