import * as Location from 'expo-location';

/**
 * Checks if the app has been granted foreground location permissions.
 * @returns {Promise<boolean>} A promise that resolves to true if permission is granted, false otherwise.
 */
export const checkLocationPermissions = async (): Promise<boolean> => {
    const { status } = await Location.getForegroundPermissionsAsync();
    return status === Location.PermissionStatus.GRANTED;
};

/**
 * Requests foreground location permissions from the user.
 * @returns {Promise<boolean>} A promise that resolves to true if permission is granted, false otherwise.
 */
export const requestLocationPermissions = async (): Promise<boolean> => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === Location.PermissionStatus.GRANTED;
};

/**
 * Checks if location services are enabled and permissions are granted.
 * If permissions are not granted, it will request them.
 * @returns {Promise<boolean>} A promise that resolves to true if location is enabled and permissions are granted.
 */
export const ensureLocationPermissions = async (): Promise<boolean> => {
    const servicesEnabled = await Location.hasServicesEnabledAsync();
    if (!servicesEnabled) {
        // Location services are not enabled on the device.
        // You might want to prompt the user to enable them in the settings.
        return false;
    }
    let hasPermission = await checkLocationPermissions();
    if (!hasPermission) {
        hasPermission = await requestLocationPermissions();
    }
    return hasPermission;
};


/**
 * Gets the current device location.
 * It ensures that location services are enabled and permissions are granted before proceeding.
 * @returns {Promise<Location.LocationObject | null>} A promise that resolves to the location object or null.
 */
export const getCurrentLocation = async (): Promise<Location.LocationObject | null> => {
    const canGetLocation = await ensureLocationPermissions();
    if (!canGetLocation) {
        return null;
    }
    return await Location.getCurrentPositionAsync({});
};
