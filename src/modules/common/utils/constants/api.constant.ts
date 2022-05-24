import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const BASE_URL = `${publicRuntimeConfig.hostUrl}/api`;

export const API_CONSTANT = {
  USERS: "/users",
};
