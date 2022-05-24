import axios from "axios";
import {
  API_CONSTANT,
  BASE_URL,
} from "../../common/utils/constants/api.constant";
import { DreamDetailsProps } from "../../details-page/types/dream-details";
import { AddDreamServieProps } from "../types/update-form.types";

export class AddDreamServices {
  static async addDreamDetails({
    payload,
  }: AddDreamServieProps): Promise<void> {
   
    return await axios.post(`${BASE_URL}/${API_CONSTANT.DREAM}`, payload);
  }
}
