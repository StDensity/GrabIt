import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import {
   downloadProgress,
   DownloadStatus,
   mediaDownloaderResponse,
   ProgressMessage,
} from "../../types/types";

import { mediaDownloader } from "../../utils/downloader";
import ProgressMessageDisplay from "./ProgressMessageDisplay";
import DownloadProgress from "./DownloadProgress";
import DownloadCompleteActions from "./DownloadCompleteActions";
import ErrorDisplay from "./ErrorDisplay";

import InputForm from "./InputForm";
// import InputArea from "@/src/components/MainForm/inputArea";

const MainForm = () => {
   const [textInput, setTextInput] = useState("");
   const [progressInfo, setProgressInfo] = useState<downloadProgress>({
      isTotalFileSizeGiven: true,
      progress: 0,
   });
   const [downloadStatus, setDownloadStatus] = useState<DownloadStatus>("idle");
   const [downloadResult, setDownloadResult] =
      useState<mediaDownloaderResponse | null>();
   const [progressMessage, setProgressMessage] =
      useState<ProgressMessage>(null);

   function textChangeHandler(text: string) {
      setTextInput(text);
   }

   const startDownloadHandler = async () => {
      setProgressInfo({
         isTotalFileSizeGiven: true,
         progress: 0,
      });
      setDownloadStatus("preparing");
      setProgressMessage("Preparing");
      setDownloadResult(null);

      const result = await mediaDownloader({
         url: textInput,
         setProgressState: setProgressInfo,
         setDownloadingStatus: setDownloadStatus,
         setProgressMessage: setProgressMessage,
      });
      setDownloadResult(result);
      // console.log(result);
   };

   return (
      <View className={`mt-10`}>
         <InputForm
            textChangeHandler={textChangeHandler}
            startDownloadHandler={startDownloadHandler}
            downloadStatus={downloadStatus}
         />

         {downloadStatus !== "idle" && progressMessage && (
            <ProgressMessageDisplay progressMessage={progressMessage} />
         )}

         {downloadStatus === "downloading" && (
            <DownloadProgress progressInfo={progressInfo} />
         )}

         {downloadStatus === "finished" &&
            downloadResult?.fileSize &&
            downloadResult.uri && (
               <DownloadCompleteActions downloadResult={downloadResult} />
            )}

         {downloadStatus === "error" && <ErrorDisplay />}
      </View>
   );
};

export default MainForm;

const styles = StyleSheet.create({});
