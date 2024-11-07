import { StyleSheet, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
import { GRAY_PALETTE } from "../constants/color";

interface MinimalTextInputProps {
   textInputStyles?: string;
   placeholderText?: string;
   textInputProps?: TextInputProps;
   value?: string;
   textChangeHandler?: (textInput: string) => void;
}

const MinimalTextInput = (props: MinimalTextInputProps) => {
   return (
      <TextInput
         className={`border-dashed border border-gray-400 rounded-md 
            p-1 px-2 text-gray-600 min-h-11
            ${props.textInputStyles}`}
         {...props.textInputProps}
         placeholder={props.placeholderText}
         selectionColor={GRAY_PALETTE.GRAY_300}
         cursorColor={GRAY_PALETTE.GRAY_500}
         placeholderTextColor={GRAY_PALETTE.GRAY_400}
         value={props.value}
         onChangeText={props.textChangeHandler}
      />
   );
};

export default MinimalTextInput;

const styles = StyleSheet.create({});
