import { Suspense } from "react";
import { Import } from "../../src/features/import";
import { API } from "../../src/gql/sanityApi";

export default async function Page() {
  const data = await API.allEvents();
  const communityEvents = data?.allEventInstance ?? [];

  return (
    <main className="mx-auto max-w-5xl p-4">
      <Suspense>
        <Import communityEvents={communityEvents} />
      </Suspense>
    </main>
  );
}
