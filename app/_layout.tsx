import { AuthProvider } from "@/contexts/authContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: 'none'}} />
        <Stack.Screen name="(auth)" options={{ headerShown: false, animation: 'none' }} />
      </Stack>
    </AuthProvider>
  );
}
