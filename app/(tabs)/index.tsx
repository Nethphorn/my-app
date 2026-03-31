import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../../global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="./onboarding" className="text-xl font-bold text-blue-500">
        Go to Onboarding
      </Link>
      <Link href="./(auth)/sign-in" className="text-xl font-bold text-blue-500">
        Go to Sign In
      </Link>
      <Link href="./(auth)/sign-up" className="text-xl font-bold text-blue-500">
        Go to Sign Up
      </Link>
      <Link
        href="./(tabs)/subscriptions/spotify"
        className="text-xl font-bold text-blue-500"
      >
        Go to Spotify Subscription
      </Link>
      <Link
        href={{
          pathname: "./(tabs)/subscriptions/[id]",
          params: {
            id: "netflix",
          },
        }}
        className="text-xl font-bold text-blue-500"
      >
        Go to Netflix Subscription
      </Link>
    </View>
  );
}
