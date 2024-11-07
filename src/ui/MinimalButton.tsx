import {
   Button,
   Pressable,
   StyleSheet,
   Text,
   View,
   StyleProp,
   ViewStyle,
} from "react-native";
import React, { useState } from "react";
import { GRAY_PALETTE } from "../constants/color";

interface MinimalButtonProps {
   viewStyles?: string;
   innerTextStyles?: string;
   title: string;
   onPress?: () => void;
   disabled?: boolean;
}

const MinimalButton = (props: MinimalButtonProps) => {
   return (
      <View
         className={`overflow-hidden rounded-md h-11 ${props.viewStyles} ${
            props.disabled && "opacity-50"
         }`}
      >
         <Pressable
            className={`bg-gray-600 p-1 
                        items-center justify-center flex-1 `}
            android_ripple={{ color: GRAY_PALETTE.GRAY_600 }}
            onPress={() => props.onPress?.()}
            disabled={props.disabled}
         >
            <Text
               className={`text-gray-50 font-bold text-center 
                           ${props.innerTextStyles}`}
            >
               {props.title}
            </Text>
         </Pressable>
      </View>
   );
};

export default MinimalButton;

const styles = StyleSheet.create({});
