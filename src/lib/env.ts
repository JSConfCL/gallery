export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-07-02";

export const sanityDataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const sanityProjectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
