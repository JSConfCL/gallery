"use client";
import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { usePathname, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Button } from "../../src/components/ui/button";
import { ErrorBoundary } from "../../src/features/import/errorBoundary";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [redirectUrl, setRedirectUrl] = useState("");
  const router = useRouter();
  useEffect(() => {
    setRedirectUrl(window.location.host);
  }, []);

  return (
    <main className="mx-auto max-w-5xl p-4">
      <SignedIn>
        <Suspense>
          <ErrorBoundary
            onError={() => {
              router.push("/", {});
            }}
          >
            {children}
          </ErrorBoundary>
        </Suspense>
      </SignedIn>
      <SignedOut>
        {process.env.NEXT_PUBLIC_SIGN_IN_URL ? (
          <Button asChild variant="secondary">
            <a
              href={`${process.env.NEXT_PUBLIC_SIGN_IN_URL}?redirect_url=https://${redirectUrl}`}
            >
              Ingresar
            </a>
          </Button>
        ) : (
          <SignInButton mode="modal" redirectUrl={pathname}>
            <Button variant="secondary">Ingresar</Button>
          </SignInButton>
        )}
      </SignedOut>
    </main>
  );
}
