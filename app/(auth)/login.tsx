import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'expo-router';

const Login = () => {
    const { logIn } = useAuth();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={logIn}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.replace('/signup')}>
                <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;

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
        backgroundColor: '#3498db',
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
