import { AuthProvider } from "@/contexts/authContext";
import { LocationProvider } from "@/contexts/locationContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <LocationProvider>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false, animation: 'none' }} />
          <Stack.Screen name="location" options={{ headerShown: false, animation: 'none' }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false, animation: 'none' }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: 'none' }} />
        </Stack>
      </AuthProvider>
    </LocationProvider>
  );
}
