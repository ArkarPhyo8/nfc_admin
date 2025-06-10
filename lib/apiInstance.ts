import axios from "axios";

export const NFC_APi = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
