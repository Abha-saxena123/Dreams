import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "react-query";
import { AddDreamServices } from "../services/add-dream.services";
import { AddDreamServiceProps } from "../types/add-dream.types";

export const useAddDream = (): UseMutationResult<void, Error, AddDreamServiceProps> => {
  
    return useMutation(AddDreamServices.addDreamDetails);
  };