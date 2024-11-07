import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { mediaDownloaderResponse } from "@/src/types/types";
import { shareFile } from "@/src/utils/shareFile";
import { moveFile } from "@/src/utils/moveFile";
import MinimalButton from "@/src/ui/MinimalButton";
import MinimalButtonOutline from "@/src/ui/MinimalButtonOutline";

interface DownloadCompleteActionsProps {
   downloadResult: mediaDownloaderResponse;
}

const DownloadCompleteActions = (props: DownloadCompleteActionsProps) => {
   return (
      <View className="mt-4">
         <Text>Finished Downloading</Text>
         <Text>Size: {props.downloadResult.fileSize} MB</Text>
         <View className="flex-row mt-4 gap-2 w-full">
            <MinimalButtonOutline
               viewStyles="flex-[0.50]"
               title="Share"
               onPress={() => shareFile(props.downloadResult.uri)}
            />
            <MinimalButton
               viewStyles="flex-[0.50]"
               title="Save to Device"
               onPress={() =>
                  moveFile(
                     props.downloadResult.uri,
                     props.downloadResult.fileName
                  )
               }
            />
         </View>
      </View>
   );
};

export default DownloadCompleteActions;

const styles = StyleSheet.create({});
