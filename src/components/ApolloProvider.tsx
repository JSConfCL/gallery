"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/clerk-react";

const useGetClient = (token: string) => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_JSCL_API_URL,
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const JSChileApolloProvider = ({ children }) => {
  const { getToken } = useAuth();
  const [token, setToken] = useState("");
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

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
