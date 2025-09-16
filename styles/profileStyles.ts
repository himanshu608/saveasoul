import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    fieldContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#555',
        fontWeight: '500',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
    termsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    logoutButton: {
        backgroundColor: '#e74c3c',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});