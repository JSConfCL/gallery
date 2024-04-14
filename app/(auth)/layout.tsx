"use client";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Button } from "../../src/components/ui/button";
import { ErrorBoundary } from "../../src/features/import/errorBoundary";
import {
  useIsAuthReady,
  useIsLoggedIn,
} from "../../src/lib/supabase/AuthProvider";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthReady = useIsAuthReady();
  const isLoggedIn = useIsLoggedIn();
  const [redirectUrl, setRedirectUrl] = useState("");
  const router = useRouter();
  useEffect(() => {
    setRedirectUrl(window.location.host);
  }, []);

  if (!isAuthReady) {
    return null;
  }

  if (!isLoggedIn) {
  }

  return (
    <main className="mx-auto max-w-5xl p-4">
      {isLoggedIn && (
        <Suspense>
          <ErrorBoundary
            onError={() => {
              router.push("/", {});
            }}
          >
            {children}
          </ErrorBoundary>
        </Suspense>
      )}
      {!isLoggedIn && (
        <Button asChild variant="secondary">
          <Link href="/login">Ingresar</Link>
        </Button>
      )}
    </main>
  );
}
