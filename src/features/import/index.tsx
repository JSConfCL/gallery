"use client";
import { Importer } from "./importer";
import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "./errorBoundary";
import { usePathname, useRouter } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import { AllEventsQuery } from "../../gql/graphql";
import { useIsSuperAdminSuspenseQuery } from "../../gql/jschileAPI";
import { Button } from "../../components/ui/button";

const ImportImpl = ({
  communityEvents,
}: {
  communityEvents: AllEventsQuery["allEvent"];
}) => {
  const router = useRouter();
  const superAdminQuery = useIsSuperAdminSuspenseQuery();
  const superAdmin = superAdminQuery.data.me.isSuperAdmin;
  if (!superAdmin) {
    router.push("/");
    return null;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary
        onError={() => {
          router.push("/", {});
        }}
      >
        <Importer communityEvents={communityEvents} />
      </ErrorBoundary>
    </Suspense>
  );
};
export const Import = ({
  communityEvents,
}: {
  communityEvents: AllEventsQuery["allEvent"];
}) => {
  const pathname = usePathname();
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    setRedirectUrl(window.location.host);
  }, []);

  return (
    <>
      <SignedIn>
        <ImportImpl communityEvents={communityEvents} />
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
    </>
  );
};
