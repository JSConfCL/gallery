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
      domain={(url) => url.host}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      {children}
    </ClerkProvider>
  );
};
