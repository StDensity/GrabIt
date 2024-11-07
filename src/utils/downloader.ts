import * as FileSystem from "expo-file-system";
import {
   downloadProgress,
   DownloadStatus,
   ProgressMessage,
} from "../types/types";

import { getDownloadUrl } from "./getDownloadUrl";
import { isSupportedUrl } from "./service-config";

function bytesToMB(bytes: number) {
   try {
      if (bytes < 0) return 0;
      const size = (bytes / (1024 * 1024)).toFixed(2);
      return Number(size);
   } catch (e) {
      // console.log(e);
      return 0;
   }
}

interface mediaDownloaderProps {
   url: string;
   fileName?: string;
   setDownloadingStatus?: React.Dispatch<React.SetStateAction<DownloadStatus>>;
   setProgressState?: React.Dispatch<React.SetStateAction<downloadProgress>>;
   setProgressMessage?: React.Dispatch<React.SetStateAction<ProgressMessage>>;
}

export const mediaDownloader = async ({
   url,
   // fileName = `${Date.now()}.mp4`,
   setDownloadingStatus,
   setProgressState,
   setProgressMessage,
}: mediaDownloaderProps) => {
   // Checking if the url is supported or not.
   if (!isSupportedUrl(url)) {
      setProgressMessage?.("The url is not supported");
      setDownloadingStatus?.("finished");
      return;
   }

   setProgressMessage?.("Fetching download url");

   const res = await getDownloadUrl(url);

   if (!res || !res?.url) {
      setProgressMessage?.("Couldn't get the url");
      setDownloadingStatus?.("finished");
      // console.log("Could not get the download url.");
      return;
   }
   setProgressMessage?.("Fetched download url");
   const downloadUrl = res.url;
   // console.log("file", res.filename)
   const fileName = `Grabit_${res.filename.split("_").pop()}`;

   // console.log("The file name is", fileName);

   const fullPath = `${FileSystem.cacheDirectory}${fileName}`;

   const progressCallback = (
      downloadProgress: FileSystem.DownloadProgressData
   ) => {
      // if the total size is not given
      if (downloadProgress.totalBytesExpectedToWrite < 0) {
         setProgressState?.({
            isTotalFileSizeGiven: false,
            progress: bytesToMB(downloadProgress.totalBytesWritten),
         });
         return;
      }

      const progress =
         Math.floor(
            (downloadProgress.totalBytesWritten /
               downloadProgress.totalBytesExpectedToWrite) *
               100
         ) / 100;
      // console.log(
      //    downloadProgress.totalBytesWritten,
      //    "out of ",
      //    downloadProgress.totalBytesExpectedToWrite
      // );
      setProgressState?.({ isTotalFileSizeGiven: true, progress: progress });
   };

   const downloadResumable = FileSystem.createDownloadResumable(
      downloadUrl,
      fullPath,
      {},
      (downloadProgress) => {
         progressCallback(downloadProgress);
      }
   );

   try {
      setProgressMessage?.("Downloading");
      setDownloadingStatus?.("downloading");

      const downloadResult = await downloadResumable.downloadAsync();

      if (!downloadResult?.uri) {
         throw new Error("Failed to get file uri");
      }

      const fileInfo: FileSystem.FileInfo = await FileSystem.getInfoAsync(
         downloadResult.uri
      );
      if (!fileInfo.exists) {
         throw new Error("Failed to get size info");
      }

      setDownloadingStatus?.("finished");
      setProgressMessage?.(null);
      console.log("Downloading Done");
      return {
         uri: downloadResult.uri,
         fileSize: bytesToMB(fileInfo.size),
         fileName: fileName,
      };
   } catch (error) {
      setDownloadingStatus?.("error");
      console.error(
         "Download failed:",
         error instanceof Error ? error.message : "Unknown error"
      );
      return null;
   }
};
