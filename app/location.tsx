import { useLocation } from '@/contexts/locationContext';
import { locationStyles } from '@/styles/locationStyles';
import React from 'react';
import { Button, Text, View, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LocationPermissionPage = () => {
  const {requestLocationPermission} = useLocation();

  const openAppSettings = () => {
    Linking.openSettings();
  }

  return (
    <SafeAreaView style={locationStyles.container}>
      <View style={locationStyles.content}>
        <Text style={locationStyles.title}>Location Access Required</Text>
        <Text style={locationStyles.description}>
          To ensure we can assist you in an emergency, our app needs access to your location. This is crucial for our core safety features to function correctly.
        </Text>
        <Text style={locationStyles.instructions}>
          Please tap the button below to grant location permission.
        </Text>
        <View style={locationStyles.buttonContainer}>
            <Button title="Allow Location Access" onPress={requestLocationPermission} />
        </View>
        <View style={locationStyles.footer}>
            <Text style={locationStyles.footerText}>
            If you've previously denied permission, the prompt might not appear. In that case, you'll need to enable it manually in your device settings.
            </Text>
            <Button title="Open Settings" onPress={openAppSettings} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LocationPermissionPage;