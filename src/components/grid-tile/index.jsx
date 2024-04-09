import {Pressable, View, Text} from "react-native"

import {GRAY_01} from '../../theme';

import {styles} from './styles'

/** @param {Props} props */
export const GridTile = (props) => {
    const {title, color} = props;

    return (
        <View style={styles.container}>
            <Pressable
                style={({pressed}) => [
                    styles.button, 
                    pressed ? styles.buttonPressed : null
                ]}
                android_ripple={{color: GRAY_01}}

            >
                <View style={[styles.content, {
                    backgroundColor: color
                }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}


/**
 * @typedef {object} Props
 * @prop {string} title
 * @prop {string} color
 */