import React from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';

import {globalStyle} from '../../theme';
import {GridTile} from '../../components/grid-tile';

import {PET_CATEGORIES} from './constants';
import {styles} from './styles';

/** @param {Props} itemData */
const renderPetCategory = (itemData) => {
    return (
        <GridTile
            title={itemData.item.name}
            color={itemData.item.color}
            icon={itemData.item.icon}
        />
    )
}

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={globalStyle.heading1}>
                Choose a pet
            </Text>

            <FlatList
                key={'#'}
                data={PET_CATEGORIES}
                keyExtractor={item => item.id}
                renderItem={renderPetCategory}
                numColumns={2}
            />
        </View>
    );
};

/**
 * @typedef {object} Props
 * @prop {object} item
 * @prop {string} item.name
 * @prop {string} item.color
 * @prop {HTMLImageElement} item.icon
 */