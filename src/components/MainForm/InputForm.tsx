import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MinimalTextInput from "@/src/ui/MinimalTextInput";
import MinimalButton from "@/src/ui/MinimalButton";
import { DownloadStatus } from "@/src/types/types";

interface inputFormProps {
   textChangeHandler: (textInput: string) => void;
   startDownloadHandler: () => void;
   downloadStatus: DownloadStatus;
}

const InputForm = (props: inputFormProps) => {
   return (
      <View className="flex-row gap-2">
         <MinimalTextInput
            placeholderText="Paste the url"
            textInputProps={{ selectTextOnFocus: true }}
            textInputStyles="flex-[0.75]"
            textChangeHandler={props.textChangeHandler}
         />
         <MinimalButton
            title="Submit"
            viewStyles="flex-[0.25]"
            onPress={() => props.startDownloadHandler()}
            disabled={
               props.downloadStatus === "idle" ||
               props.downloadStatus === "finished"
                  ? false
                  : true
            }
         />
      </View>
   );
};

export default InputForm;
