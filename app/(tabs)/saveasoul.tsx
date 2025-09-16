import { Text, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { saveASoulStyles } from '@/styles/saveASoulStyles';

interface LocationItem {
    id: string;
    distance: string;
}

const dummyData: LocationItem[] = [
    { id: '1', distance: '1km away' },
    { id: '2', distance: '2.5km away' },
    { id: '3', distance: '500m away' },
    { id: '4', distance: '10km away' },
    { id: '5', distance: '1.2km away' },
    { id: '6', distance: '3km away' },
    { id: '7', distance: '750m away' },
    { id: '8', distance: '8km away' },
];

const SaveASoul: React.FC = () => {
    const [locations, setLocations] = useState<LocationItem[]>(dummyData);

    const renderItem: ListRenderItem<LocationItem> = ({ item }) => (
        <TouchableOpacity style={saveASoulStyles.itemContainer} onPress={() => console.log('Pressed on:', item.distance)}>
            <Text style={saveASoulStyles.distanceText}>{item.distance}</Text>
            <MaterialCommunityIcons name="map-marker" size={24} color="#e74c3c"/> 
        </TouchableOpacity>
    );

    return (
        <SafeAreaView>
            <FlatList
                data={locations}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

export default SaveASoul;