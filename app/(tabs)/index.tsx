import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
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
    </SafeAreaView>
  );
}
