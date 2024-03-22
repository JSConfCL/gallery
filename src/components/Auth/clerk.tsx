"use client";
import { ClerkProvider } from "@clerk/clerk-react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Clerk = ({ children }: Props) => {
  return (
    <ClerkProvider
      supportEmail="contacto@jschile.org"
      localization={{
        locale: "es-ES",
      }}
      isSatellite={Boolean(process.env.NEXT_PUBLIC_CLERK_URL)}
      // TODO: Esto no debería existir. Borrarlo cuando deployiemos a producción
      domain={process.env.NEXT_PUBLIC_CLERK_URL}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      {children}
    </ClerkProvider>
  );
};
