import axios from "axios";
import {
   DownloadModeOption,
   DownloadVideoCodec,
   DownloadVideoQuality,
   DownloadVideoQualityValue,
   getDownloadUrlResponse,
} from "../types/types";
import { incrementCounter } from "./incrementCounter";

// import Config from "react-native-config";

// export type getDownloadUrlProps = {
//    url: string;
//    downloadMode: DownloadModeOption;
//    filename?: string;
//    quality: DownloadVideoQuality;
//    codec: DownloadVideoCodec;
// };

export async function getDownloadUrl(
   url: string
   // downloadMode: DownloadModeOption,
   // quality: DownloadVideoQuality,
   // codec: DownloadVideoCodec
): Promise<getDownloadUrlResponse | null> {
   const downloadMode: DownloadModeOption = "auto"; // Choose the desired download mode
   const quality: DownloadVideoQualityValue = "1080"; // Choose from the defined qualities
   const codec: DownloadVideoCodec = "h264"; // Choose from the supported codecs

   const options = {
      method: "POST",
      url: process.env.EXPO_PUBLIC_getUrl,
      headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
      },
      data: {
         url: url,
         downloadMode: downloadMode,
         filenameStyle: "basic",
         videoQuality: quality,
         youtubeVideoCodec: codec,
      },
   };

   try {
      const response = await axios.request(options);
      // console.log("Download Response:", response.data);
      incrementCounter();
      return response.data; // Return the API response
   } catch (error: any) {
      // console.error("Error downloading video:", error);
      return null; // Handle error appropriately
   }
}

// Example usage
// const videoUrl = "https://www.youtube.com/watch?v=your_video_id";

// downloadVideo(videoUrl).then((data) => {
//    if (data) {
//       console.log("Video download initiated:", data);
//    } else {
//       console.log("Failed to initiate download.");
//    }
// });
