"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Importer } from "./importer";
import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "./errorBoundary";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/clerk-react";
import { AllEventsQuery } from "../../gql/graphql";

const useGetClient = (token: string) => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_JSCL_API_URL,
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
export const Import = ({
  communityEvents,
}: {
  communityEvents: AllEventsQuery["allEventInstance"];
}) => {
  const { getToken } = useAuth();
  const [token, setToken] = useState("");
  const router = useRouter();
  const client = useGetClient(token);
  useEffect(() => {
    const start = async () => {
      const token = await getToken({
        template: "API_AUTH",
      });
      if (!token) {
        return;
      }
      setToken(token);
    };
    start().catch((e) => {
      console.error(e);
    });
  }, []);

  if (!token) {
    return;
  }
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary
          onError={() => {
            router.push("/", {});
          }}
        >
          <Importer communityEvents={communityEvents} />
        </ErrorBoundary>
      </Suspense>
    </ApolloProvider>
  );
};
