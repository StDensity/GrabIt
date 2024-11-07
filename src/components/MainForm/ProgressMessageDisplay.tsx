import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface ProgressMessageDisplayProps {
   progressMessage: string;
}

const ProgressMessageDisplay = (props: ProgressMessageDisplayProps) => {
   return (
      <View>
         <View>
            <Text className="mt-4 text-gray-500 ">{props.progressMessage}</Text>
         </View>
      </View>
   );
};

export default ProgressMessageDisplay;

const styles = StyleSheet.create({});
