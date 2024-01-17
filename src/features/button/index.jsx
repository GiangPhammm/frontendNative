import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

/** @param {Props} props */
export const Button = (props) => {
    const {onPress, title} = props;

    return (
        <Pressable
            style={styles.primaryBtn}

            onPress={onPress}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
  );
}

const styles = StyleSheet.create({
    primaryBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#070d59',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

/**
 * @typedef {object} Props
 * @prop {string} title
 * @prop {(event: import('react-native').GestureResponderEvent) => void} onPress
 */
