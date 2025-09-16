import { useAuth } from '@/contexts/authContext';
import { profileStyles } from '@/styles/profileStyles';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Profile = () => {
    const {logOut} = useAuth();

    const dummyData = {
        name: 'John Doe',
        gender: 'Male',
        phone: '+1 123 456 7890',
        email: 'john.doe@example.com',
    };

    return (
        <View style={profileStyles.container}>
            <View style={profileStyles.fieldContainer}>
                <Text style={profileStyles.label}>Name</Text>
                <View style={profileStyles.input}><Text style={profileStyles.value}>{dummyData.name}</Text></View>
            </View>

            <View style={profileStyles.fieldContainer}>
                <Text style={profileStyles.label}>Gender</Text>
                <View style={profileStyles.input}><Text style={profileStyles.value}>{dummyData.gender}</Text></View>
            </View>

            <View style={profileStyles.fieldContainer}>
                <Text style={profileStyles.label}>Phone No.</Text>
                <View style={profileStyles.input}><Text style={profileStyles.value}>{dummyData.phone}</Text></View>
            </View>

            <View style={profileStyles.fieldContainer}>
                <Text style={profileStyles.label}>Email</Text>
                <View style={profileStyles.input}><Text style={profileStyles.value}>{dummyData.email}</Text></View>
            </View>

            <TouchableOpacity style={[profileStyles.fieldContainer, profileStyles.termsContainer]}>
                <Text style={profileStyles.label}>Terms and Conditions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={profileStyles.logoutButton} onPress={logOut}>
                <Text style={profileStyles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Profile;
