import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";

function useAuth() {
  const { data } = useQuery(GET_ME);
  const userType =
    data && data.getMe ? (data.getMe.donor ? "Donor" : "Organization") : null;

  return { userType };
}

export default useAuth;
