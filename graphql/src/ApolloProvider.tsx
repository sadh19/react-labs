import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as AP,
} from "@apollo/client";
import * as React from "react";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

export const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  return <AP client={client}>{children}</AP>;
};
