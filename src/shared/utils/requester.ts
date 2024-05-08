import { CONFIG } from "@/config/defaults";
import axios from "axios";

export const requester = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
  baseURL: CONFIG.WEATHER_API_BASE_URL,
});
