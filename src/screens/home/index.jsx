import React from 'react';
import {View, Text, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {PET_CATEGORIES} from './constants';

import {globalStyle} from '../../theme';
import {GridTile} from '../../components/grid-tile';

// @ts-ignore
const renderPetCategory = (itemData) => {
    return (
        <GridTile
            title={itemData.item.name}
            color={itemData.item.color}
        />
    )
}

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={globalStyle.heading1}>
                Choosing a pet
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


const styles = EStyleSheet.create({
    
});
