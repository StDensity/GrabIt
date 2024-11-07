import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import "../../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
   return (
      <GestureHandlerRootView style={{ flex: 1 }}>
         <Stack>
            <Stack.Screen
               name="(tabs)"
               options={{
                  headerShown: false,
               }}
            />
         </Stack>
      </GestureHandlerRootView>
   );
};

export default RootLayout;

const styles = StyleSheet.create({});
