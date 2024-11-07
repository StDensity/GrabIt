import React, { useCallback, useMemo, useRef } from "react";
import { View, Text } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import MinimalButtonOutline from "@/src/ui/MinimalButtonOutline";
import MinimalButton from "@/src/ui/MinimalButton";
import { updateCheckResponse } from "@/src/types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface DevMessageSheetProps {
   updateDetails: updateCheckResponse;
}

const DevMessageSheet = (props: DevMessageSheetProps) => {
   const bottomSheetRef = useRef<BottomSheet>(null);

   const handleSheetChanges = useCallback((index: number) => {
      // console.log("handleSheetChanges", index);
   }, []);

   const messageTitle = props.updateDetails.messageTitle;
   const messageContent = props.updateDetails.message;
   const messageButtonContent = props.updateDetails.messageButtonContent;

   //    const snapPoints = useMemo(() => ["25%"], []);

   const handleButtonPress = () => {
      bottomSheetRef.current?.close();
      AsyncStorage.setItem("DevMessageId", props.updateDetails.messageId);
   };

   return (
      <BottomSheet
         ref={bottomSheetRef}
         //  onChange={handleSheetChanges}
         //  snapPoints={snapPoints}
         backgroundStyle={{ backgroundColor: "#f9fafb" }}
         enableDynamicSizing={true}
      >
         <BottomSheetView className="flex-1">
            <View className="mx-3 mb-2">
               <View>
                  <Text className="text-3xl font-bold text-gray-800">
                     {messageTitle}
                  </Text>
                  <Text className="mt-4 text-lg text-gray-600">
                     {messageContent}
                  </Text>
               </View>

               <View className="gap-3 mb-6 mt-4">
                  {/* <MinimalButtonOutline
                  //  viewStyles="flex-[50]"
                  title={messageButtonContent}
                  onPress={handleMaybeLaterButton}
               /> */}
                  <MinimalButton
                     title={messageButtonContent}
                     onPress={handleButtonPress}
                  />
               </View>
            </View>
         </BottomSheetView>
      </BottomSheet>
   );
};

export default DevMessageSheet;
