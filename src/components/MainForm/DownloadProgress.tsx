import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { downloadProgress } from "@/src/types/types";
import MinimalProgressbar from "@/src/ui/MinimalProgressbar";

interface DownloadProgressProps {
   progressInfo: downloadProgress;
}

const DownloadProgress = (props: DownloadProgressProps) => {
   return (
      <View className="">
         {props.progressInfo.isTotalFileSizeGiven ? (
            <MinimalProgressbar progress={props.progressInfo.progress} />
         ) : (
            <Text>{props.progressInfo.progress}MB</Text>
         )}
      </View>
   );
};

export default DownloadProgress;

const styles = StyleSheet.create({});
