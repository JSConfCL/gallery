"use client";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "./errorBoundary";
import { Importer } from "./importer";
import { AllEventsQuery } from "../../gql/graphql";
import { useIsSuperAdminSuspenseQuery } from "../../gql/jschileAPI";

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
  return <ImportImpl communityEvents={communityEvents} />;
};
