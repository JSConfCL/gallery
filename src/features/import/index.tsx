"use client";
import { Importer } from "./importer";
import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "./errorBoundary";
import { useRouter } from "next/navigation";
import { SignedIn, useAuth } from "@clerk/clerk-react";
import { AllEventsQuery } from "../../gql/graphql";
import { useIsSuperAdminSuspenseQuery } from "../../gql/jschileAPI";

const ImportImpl = ({
  communityEvents,
}: {
  communityEvents: AllEventsQuery["allEventInstance"];
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
  communityEvents: AllEventsQuery["allEventInstance"];
}) => {
  return (
    <SignedIn>
      <ImportImpl communityEvents={communityEvents} />
    </SignedIn>
  );
};
