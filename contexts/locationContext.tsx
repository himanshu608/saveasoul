import { ensureLocationPermissions } from "@/handlers/locationPermissionHandler";
import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type LocationState = {
    isLocationEnabled: boolean;
    requestLocationPermission: () => void;
};

const LocationContext = createContext<LocationState>({
    isLocationEnabled: false,
    requestLocationPermission: () => {},
});

const LocationProvider = ({ children }: PropsWithChildren) => {
    const [isLocationEnabled, setIsLocationEnabled] = useState(false);
    const router = useRouter();

    const requestLocationPermission = async () => {
        const locationPermissions = await ensureLocationPermissions();
        setIsLocationEnabled(locationPermissions);
        if(locationPermissions) {
            router.replace('/');
        }
    }

    useEffect(()=> {
        requestLocationPermission();
    },[]);

    return (
        <LocationContext.Provider value={{ isLocationEnabled, requestLocationPermission }}>
            {children}
        </LocationContext.Provider>
    );
}

const useLocation = () => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error("useLocation must be used within a LocationProvider");
    }
    return context;
};

export { LocationContext, LocationProvider, LocationState, useLocation };
