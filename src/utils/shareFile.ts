import * as Sharing from "expo-sharing";

export const shareFile = async (fileUri: string) => {
   try {
      await Sharing.shareAsync(fileUri, {
         dialogTitle: "Grabit and Shareit",
         mimeType: "video/mp4",
      });
   } catch (e) {
      // console.log("error in share file", e);
   }
};
