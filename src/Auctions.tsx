import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { listAuctions } from "./graphql/queries";
import { ListAuctionsQuery, ListAuctionsQueryVariables } from "./API";
import { AuctionCard } from "./AuctionCard";

export const Auctions = () => {
  return (
    <Query<ListAuctionsQuery, ListAuctionsQueryVariables>
      query={gql(listAuctions)}
      variables={{ limit: 10 }}
    >
      {({ data, loading }) => {
        if (
          loading ||
          !data ||
          !data.listAuctions ||
          !data.listAuctions.items
        ) {
          return null;
        }

        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: 10
            }}
          >
            {data.listAuctions.items.map(x => (
              <AuctionCard name={x!.name} price={x!.price} key={x!.id} />
            ))}
          </div>
        );
      }}
    </Query>
  );
};
