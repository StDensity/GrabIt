import {
   Button,
   Pressable,
   StyleSheet,
   Text,
   View,
   StyleProp,
   ViewStyle,
} from "react-native";
import React from "react";
import { GRAY_PALETTE } from "../constants/color";

interface MinimalButtonOutlineProps {
   viewStyles?: string;
   innerTextStyles?: string;
   title: string;
   onPress?: () => void;
}

const MinimalButtonOutline = (props: MinimalButtonOutlineProps) => {
   return (
      <View
         className={`overflow-hidden ${props.viewStyles} rounded-md min-h-11`}
      >
         <Pressable
            className={`rounded-md items-center justify-center flex-1
                        border-dashed border border-gray-400 `}
            android_ripple={{ color: GRAY_PALETTE.GRAY_300 }}
            onPress={props.onPress}
         >
            <Text
               className={`text-gray-600 text-center font-bold  ${props.innerTextStyles}`}
            >
               {props.title}
            </Text>
         </Pressable>
      </View>
   );
};

export default MinimalButtonOutline;

const styles = StyleSheet.create({});
