import { Animated } from 'react-native';

export const startAnimation = (scaleAnim: Animated.Value) => {
    Animated.loop(
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.5,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
        ])
    ).start();
};

export const stopAnimation = (scaleAnim: Animated.Value) => {
    scaleAnim.stopAnimation();
    scaleAnim.setValue(1);
};