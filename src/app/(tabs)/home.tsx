import { Text, View } from "react-native";
import React from "react";
import BackgroundView from "@/src/ui/BackgroundView";
import MainForm from "@/src/components/MainForm/MainForm";
import BottomSheet from "@gorhom/bottom-sheet";
import UpdateSheet from "@/src/components/BottomSheets/UpdateSheet";

const Home = () => {
   // mediaDownloader({url: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"} )

   return (
      <BackgroundView>
         <View className="mx-3 mt-8">
            {/* Title */}
            <View className="">
               <View className="flex-row ">
                  <Text className="text-gray-800 font-bold text-6xl">Grab</Text>
                  <Text className="font-bold text-6xl text-gray-600">It</Text>
                  {/* <Text className="font-bold text-6xl">t</Text> */}
               </View>
               <View className="flex-row items-center gap-1">
                  <Text className="font-bold text-xl text-gray-600">
                     Simplifying
                  </Text>
                  <Text className="text-gray-600 text-lg">
                     your video downloads
                  </Text>
               </View>
            </View>

            <MainForm />
         </View>
      </BackgroundView>
   );
};

export default Home;
