import { Text, View, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import { startAnimation, stopAnimation } from '@/utils/getHelpUtils';
import { getHelpStyles } from '@/styles/getHelpStyles';

const GetHelp = () => {
  const [isPressed, setIsPressed] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    setIsPressed(!isPressed);
    if (!isPressed) {
      startAnimation(scaleAnim);
    } else {
      stopAnimation(scaleAnim);
    }
  };


  return (
    <View style={getHelpStyles.container}>
      <View style={getHelpStyles.bottomContainer}>
        {isPressed && (
          <Animated.View
            style={[
              getHelpStyles.ripple,
              {
                transform: [{ scale: scaleAnim }],
              },
            ]}
          />
        )}
        <TouchableOpacity style={getHelpStyles.button} onPress={handlePress}>
          <Text style={getHelpStyles.buttonText}>{isPressed ? 'Stop' : 'Get Help'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetHelp;