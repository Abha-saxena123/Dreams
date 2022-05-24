import { useQuery, UseQueryResult } from "react-query";
import { UserListServices } from "../services/bucketList.services";
import { Users } from "../types/list.types";

export const useUserList = (): UseQueryResult<Users[], Error> => {
  return useQuery(["user-list"], UserListServices.getUserList);
};
