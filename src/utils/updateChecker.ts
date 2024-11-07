import { firebaseConfig } from "@/config";
import axios from "axios";
import { updateCheckResponse } from "../types/types";

const databaseURL = firebaseConfig.versionConfig;

export async function getUpdateInfo(): Promise<updateCheckResponse | null> {
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
