"use client";
import { ClerkProvider } from "@clerk/clerk-react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Clerk = ({ children }: Props) => {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      {children}
    </ClerkProvider>
  );
};
