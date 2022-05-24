import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "react-query";
import { AddDreamServices } from "../services/add-dream.services";
import { AddDreamServieProps } from "../types/update-form.types";

export const useAddDream = (): UseMutationResult<void, Error, AddDreamServieProps> => {
    return useMutation(AddDreamServices.addDreamDetails);
  };