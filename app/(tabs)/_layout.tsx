import { tabsData } from '@/constants/tabsData';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {

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
    );
}

export default TabsLayout;