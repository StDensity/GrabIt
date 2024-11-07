import axios from "axios";

const databaseURL = process.env.EXPO_PUBLIC_databaseURL;

export async function incrementCounter(): Promise<void> {
   if (!databaseURL) {
      return;
   }
   try {
      const response = await axios.get<number>(databaseURL);
      const currentCount = response.data;

      const newCount = (currentCount || 0) + 1;

      // Send the new count to Firebase as JSON
      await axios.put(databaseURL, newCount, {
         headers: {
            "Content-Type": "application/json",
         },
      });
   } catch (error) {
      console.error("Increment error", error);
   }
}
