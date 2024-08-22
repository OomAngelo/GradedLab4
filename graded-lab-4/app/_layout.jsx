import { Stack } from "expo-router";
import UserProvider from "../data/userContext";
export default function Layout() {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "User",
          }}
        />
        <Stack.Screen
          name="address"
          options={{
            title: "Address",
          }}
        />
        <Stack.Screen
          name="payment"
          options={{
            title: "Payment",
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </UserProvider>
  );
}
