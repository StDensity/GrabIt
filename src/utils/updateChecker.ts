import axios from "axios";
import { updateCheckResponse } from "../types/types";

const databaseURL = process.env.EXPO_PUBLIC_versionConfig;

export async function getUpdateInfo(): Promise<updateCheckResponse | null> {
   if (!databaseURL) {
      return null;
   }
   try {
      const response = await axios.get<updateCheckResponse>(databaseURL);
      const data = response.data;
      // console.log(data)
      return response.data;
   } catch (e) {
      // console.log(e);
      return null;
   }
}
