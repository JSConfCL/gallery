"use client";
import { ClerkProvider } from "@clerk/clerk-react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Clerk = ({ children }: Props) => {
  return (
    <ClerkProvider
      isSatellite={process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE === "true"}
      domain={(url) => "jsconf.dev"}
      // signInUrl={
      //   process.env.NEXT_PUBLIC_SIGN_IN_URL
      //     ? process.env.NEXT_PUBLIC_SIGN_IN_URL
      //     : undefined
      // }
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      {children}
    </ClerkProvider>
  );
};
