import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

interface BackgroundViewProps {
   children: any;
}

const BackgroundView = (props: BackgroundViewProps) => {
   return (
         <View className="flex-1 bg-gray-100 flex-col justify-between">
            <SafeAreaView className="flex-1" >{props.children}</SafeAreaView>
            <Text className="text-center text-xs mb-2 text-gray-300">
               Alpha Build - {Constants.expoConfig?.version}
            </Text>
            <StatusBar style="dark" />
         </View>
   );
};

export default BackgroundView;
