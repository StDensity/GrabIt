import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Tabs } from "expo-router";
import { House } from "lucide-react-native";
import { GRAY_PALETTE } from "@/src/constants/color";
import UpdateSheet from "@/src/components/BottomSheets/UpdateSheet";
import { updateCheckResponse } from "@/src/types/types";
import { getUpdateInfo } from "@/src/utils/updateChecker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DevMessageSheet from "@/src/components/BottomSheets/DevMessageSheet";
import Constants from "expo-constants";
// import * as Application from 'expo-application';

const TabsLayout = () => {
   const [updateCheckerInfo, setUpdateCheckerInfo] =
      useState<updateCheckResponse | null>();

   const [currentVersionInStorage, setCurrentVersionInStorage] = useState("");
   const [devMessageId, setDevMessageId] = useState("");
   const [currentAppVersion, setCurrentAppVersion] = useState<
      string | undefined
   >();
   useEffect(() => {
      const appVersion = Constants.expoConfig?.version;
      setCurrentAppVersion(appVersion);

      const getData = async () => {
         const data = await getUpdateInfo();
         setUpdateCheckerInfo(data);
         const version = await AsyncStorage.getItem("CurrentVersion");
         const messageId = await AsyncStorage.getItem("DevMessageId");
         if (version) {
            setCurrentVersionInStorage(version);
         }
         if (messageId) {
            setDevMessageId(messageId);
         }
      };

      getData();
   }, []);

   return (
      <>
         <Tabs
            screenOptions={{
               tabBarActiveTintColor: GRAY_PALETTE.GRAY_600, // Color for active icon and title
               tabBarInactiveTintColor: GRAY_PALETTE.GRAY_400, // Color for inactive icon and title
               headerShown: false,
               tabBarLabelStyle: {
                  color: GRAY_PALETTE.GRAY_600, // Label color for active tabs
                  fontSize: 12,
               },
               tabBarStyle: {
                  backgroundColor: GRAY_PALETTE.GRAY_50, // Tab bar background color
               },
            }}
         >
            <Tabs.Screen name="index" options={{ href: null }} />
            <Tabs.Screen
               name="home"
               options={{
                  title: "Home",
                  tabBarIcon: ({ color, size }) => (
                     <House color={color} size={30} /> // `color` will reflect active/inactive state
                  ),
               }}
            />
         </Tabs>

         {updateCheckerInfo &&
            updateCheckerInfo?.version !== currentAppVersion &&
            updateCheckerInfo?.version !== currentVersionInStorage && (
               <UpdateSheet updateDetails={updateCheckerInfo} />
            )}
         {updateCheckerInfo &&
            updateCheckerInfo?.displayMessage &&
            updateCheckerInfo?.messageId !== devMessageId && (
               <DevMessageSheet updateDetails={updateCheckerInfo} />
            )}
      </>
   );
};

export default TabsLayout;
