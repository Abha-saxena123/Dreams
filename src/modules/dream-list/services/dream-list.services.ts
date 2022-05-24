import getConfig from "next/config";
import { BucketListProps, Users } from "../../dream-list/types/dream-list.types";
import axios from "axios";
import {
  API_CONSTANT,
  BASE_URL,
} from "../../common/utils/constants/api.constant";

export class DreamListServices {
  static async getDreamList(user: string): Promise<BucketListProps[]> {
    return await axios
      .get(`${BASE_URL}${API_CONSTANT.DREAM_LIST}`, {
        params: {
          user: user,
        },
      })
      .then((res) => res.data.data);
  }

  static async addUser(): Promise<Users[]> {
    return await axios
      .post(`${BASE_URL}${API_CONSTANT.USERS}`)
      .then((res) => res.data.data);
  }
}
