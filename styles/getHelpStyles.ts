import { StyleSheet } from 'react-native';

export const getHelpStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    statusText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
    },
    bottomContainer: {
      position: 'absolute',
      bottom: 50,
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: 'red',
      width: 120,
      height: 120,
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    ripple: {
      position: 'absolute',
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: 'rgba(255, 0, 0, 0.4)',
      zIndex: 0,
    },
  });
  