import { GET_USER } from "@/graphql/queries";
import { useQuery } from "@apollo/client";

export const { data, loading, error, refetch } = useQuery(GET_USER);
