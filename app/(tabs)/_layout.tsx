import { tabsData } from '@/constants/tabsData';
import { useAuth } from '@/contexts/authContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
    const {isLoggedIn} = useAuth();
    if(!isLoggedIn) {
        return <Redirect href="/signup"/>
    }     
    return (
        <Tabs>
            {
                tabsData.map((tab) => (
                    <Tabs.Screen
                        key={tab.name}
                        name={tab.name}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name={tab.iconName} size={size} color={color} />
                            ),
                            headerTitle: tab.headerTitle,
                            headerTitleAlign: 'center'
                        }}
                    />
                ))
            }
        </Tabs>
    )
}

export default TabsLayout;