import React, { useCallback, useMemo, useRef } from "react";
import { View, Text } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import MinimalButtonOutline from "@/src/ui/MinimalButtonOutline";
import MinimalButton from "@/src/ui/MinimalButton";
import { updateCheckResponse } from "@/src/types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UpdateSheetProps {
   updateDetails: updateCheckResponse;
}

const UpdateSheet = (props: UpdateSheetProps) => {
   const bottomSheetRef = useRef<BottomSheet>(null);

   const handleSheetChanges = useCallback((index: number) => {
      // console.log("handleSheetChanges", index);
   }, []);

   const newFeatures = props.updateDetails.newFeatures;
   const bugFix = props.updateDetails.bugFix;

   const footNote = props.updateDetails.footNotes;

   const snapPoints = useMemo(() => ["25%"], []);

   const handleMaybeLaterButton = () => {
      bottomSheetRef.current?.close();
      AsyncStorage.setItem("CurrentVersion", props.updateDetails.version);
   };

   return (
      <BottomSheet
         ref={bottomSheetRef}
         onChange={handleSheetChanges}
         snapPoints={snapPoints}
         backgroundStyle={{ backgroundColor: "#f9fafb" }}
         enableDynamicSizing={true}
      >
         <BottomSheetView className="flex-1">
            <View className="mx-3 mb-2">
               <View>
                  <Text className="text-3xl font-bold text-gray-800">
                     New Update Available
                  </Text>
                  <Text className="mt-4 text-lg text-gray-600">
                     Install the latest update to get the latest features
                  </Text>
                  <Text className="text-lg text-gray-600 mb-4">
                     and bug fixes.
                  </Text>
               </View>

               {newFeatures && (
                  <View>
                     <Text className="text-gray-800 text-2xl font-bold mb-2">
                        Features
                     </Text>
                     {newFeatures.map((item, index) => (
                        <View key={index} className="flex-row gap-2 mb-2">
                           <Text className="text-gray-600">
                              {index + 1}. {item}
                           </Text>
                        </View>
                     ))}
                  </View>
               )}

               {bugFix && (
                  <View>
                     <Text className="text-gray-800 text-2xl font-bold mb-2 mt-2">
                        Bug Fixes
                     </Text>
                     {bugFix.map((item, index) => (
                        <View key={index} className="flex-row gap-2 mb-2">
                           <Text className="text-gray-600">
                              {index + 1}. {item}
                           </Text>
                        </View>
                     ))}
                  </View>
               )}

               {footNote && <Text className="text-gray-400">{footNote}</Text>}

               <View className="flex-row gap-2 w-full mt-4 mb-3">
                  <MinimalButtonOutline
                     viewStyles="flex-[50]"
                     title="Maybe later"
                     onPress={handleMaybeLaterButton}
                  />
                  <MinimalButton viewStyles="flex-[50]" title="Update now" />
               </View>
            </View>
         </BottomSheetView>
      </BottomSheet>
   );
};

export default UpdateSheet;
