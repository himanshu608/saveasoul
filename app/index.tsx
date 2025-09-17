import React from 'react';
import { Redirect } from 'expo-router';
import { useLocation } from '@/contexts/locationContext';
import { useAuth } from '@/contexts/authContext';

const Home = () => {
    const { isLocationEnabled } = useLocation();
    const { isLoggedIn } = useAuth();

    if (!isLocationEnabled) {        
        return <Redirect href='/location' />
    }

    if (!isLoggedIn) {
        return <Redirect href="/signup" />
    }

    return <Redirect href='/gethelp' />
}

export default Home;