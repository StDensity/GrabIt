// import React from 'react';
// import { View, StyleSheet, Animated } from 'react-native';
// // @ts-ignore
// const LinearProgress = ({ progress = 0, color = 'blue', thickness = 8, style }) => {
//   // Create an animated value for the progress bar width
//   const progressWidth = React.useRef(new Animated.Value(0)).current;

//   React.useEffect(() => {
//     // Animate the progress width based on the `progress` prop
//     Animated.timing(progressWidth, {
//       toValue: progress, // expects a value between 0 and 1
//       duration: 500,
//       useNativeDriver: false,
//     }).start();
//   }, [progress]);

//     const width = progressWidth.interpolate({
//         inputRange: [0, 1],
//         outputRange: ['0%', '100%'],
//       })
//   return (
//     <View style={[styles.container, { height: thickness }, style]}>
//       <Animated.View
//         style={[
//           styles.progressBar,
//           { backgroundColor: color, width: width },
//         ]}
//       />
//     </View>
//   );
// };

// // Define basic styling
// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     backgroundColor: '#e0e0e0',
//     borderRadius: 4,
//     overflow: 'hidden',
//   },
//   progressBar: {
//     height: '100%',
//     borderRadius: 4,
//   },
// });

// export default LinearProgress;

import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import React, { useEffect } from "react";

interface MinimalProgressbarProps {
   viewStyle?: string;
   innerViewStyle?: string;
   progress: number;
}

const MinimalProgressbar = (props: MinimalProgressbarProps) => {
   const progressWidth = React.useRef(new Animated.Value(0)).current;

   useEffect(() => {
      Animated.timing(progressWidth, {
         toValue: props.progress,
         duration: 10, // Very quick 50ms animation
         easing: Easing.linear,
         delay: 0, // Lin  // No bounce effect
         useNativeDriver: false,
      }).start();
   }, [props.progress]);

   const width = progressWidth.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
   });

   // console.log(width);
   return (
      <View
         className={`h-1 w-full bg-gray-200 overflow-hidden rounded-full  ${props.viewStyle}`}
      >
         <Animated.View
            style={{ width: width }}
            className={`h-full bg-gray-500 rounded-full ${props.innerViewStyle}`}
         ></Animated.View>
      </View>
   );
};

export default MinimalProgressbar;

const styles = StyleSheet.create({});
