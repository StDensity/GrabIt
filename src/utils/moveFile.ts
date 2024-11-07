import * as FileSystem from "expo-file-system";
import { Alert } from "react-native";
import getExportFolderUri from "./getExportFolderUri";

export const moveFile = async (currentPath: string, fileName: string) => {
   const exportFolderUri = await getExportFolderUri();
   try {
      if (!exportFolderUri) {
         Alert.alert("Could not get permission to save the file.");
         return;
      }

      const file = await FileSystem.readAsStringAsync(currentPath, {
         encoding: FileSystem.EncodingType.Base64,
      });

      // const newFileName = `Grabit-${Date.now()}`;

      const newFIlePath =
         await FileSystem.StorageAccessFramework.createFileAsync(
            exportFolderUri,
            fileName,
            "video/mp4"
         );

      await FileSystem.writeAsStringAsync(newFIlePath, file, {
         encoding: FileSystem.EncodingType.Base64,
      });

      // console.log("Copy Done to ", newFIlePath);
      return {
         FilePath: newFIlePath,
      };
   } catch (e) {
      // console.log("Error occured in move file", e);
      return null;
   }
};
