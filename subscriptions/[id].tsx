import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subscription Detail: {id}</Text>
      <Link href="/subscriptions">Back to Subscriptions</Link>
    </View>
  );
};

export default SubscriptionDetail;
