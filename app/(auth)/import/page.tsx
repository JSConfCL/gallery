import { Import } from "../../../src/features/import";
import { API } from "../../../src/gql/sanityApi";

export default async function Page() {
  const data = await API.allEvents();
  const communityEvents = data?.allEvent ?? [];

  return (
    <main className="mx-auto max-w-5xl p-4">
      <Import communityEvents={communityEvents} />
    </main>
  );
}
