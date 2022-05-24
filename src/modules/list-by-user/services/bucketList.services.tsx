import getConfig from "next/config";
import { Users } from "../types/list.types";
import axios from "axios";
import {
  API_CONSTANT,
  BASE_URL,
} from "../../common/utils/constants/api.constant";

export class UserListServices {
  static async getUserList(): Promise<Users[]> {
    return await axios
      .get(`${BASE_URL}${API_CONSTANT.USERS}`)
      .then((res) => res.data.data);
  }

  static async addUser(): Promise<Users[]> {
    return await axios
      .post(`${BASE_URL}${API_CONSTANT.USERS}`)
      .then((res) => res.data.data);
  }
}
