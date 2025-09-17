import { StyleSheet } from 'react-native';

export const locationStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      paddingHorizontal: 30,
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
      color: '#333',
      lineHeight: 22
    },
    instructions: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 30,
      color: '#555',
    },
    buttonContainer: {
        marginBottom: 30,
        width: '80%'
    },
    footer: {
      marginTop: 20,
      alignItems: 'center'
    },
    footerText: {
      fontSize: 14,
      color: '#666',
      textAlign: 'center',
      marginBottom: 15,
    }
  });