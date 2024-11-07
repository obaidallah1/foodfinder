import { locationQueries } from "graphql/locations/queries.gql";
import { locationMutations } from "graphql/locations/mutations.gql";
export const resolvers = {
 Query: {
 ...locationQueries,
 },
 Mutation: {
 ...locationMutations,
 },
};
