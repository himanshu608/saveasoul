import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'expo-router';

const SignUp = () => {
    const { logIn } = useAuth(); // Assuming you have a signUp function in your context
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={logIn}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.replace('/login')}>
                <Text style={styles.linkText}>Already have an account? Log In</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        alignSelf: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#2ecc71',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkText: {
        marginTop: 20,
        color: '#3498db',
        alignSelf: 'center',
    }
});
