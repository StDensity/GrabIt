import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

const getExportFolderUri = async () => {
   try {
      const savedUri = await AsyncStorage.getItem("saveDirectoryUri");
      if (savedUri) {
         // console.log("Got sved uri");
         return savedUri;
      } else {
         // console.log("reqesting perms");
         const permission =
            await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
         if (!permission.granted) {
            return null;
         }
         await AsyncStorage.setItem(
            "saveDirectoryUri",
            permission.directoryUri
         );
         return permission.directoryUri;
      }
   } catch (e) {
      // console.log("useFilePermisson", e);
      return null;
   }
};

export default getExportFolderUri;
