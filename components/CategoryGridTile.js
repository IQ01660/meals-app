import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

/**
 * Represents an item in the Categories grid in [CategoriesScreen.js].
 * Props to be passed in are:
 *      onSelect: the function for navigating into CategoryMealsScreen.
 *      title: the tile's title at the top.
 *      color: of the tile.
 * @param {*} props 
 */
const GategoryGridTile = (props) => {
    return (
        <TouchableOpacity
			activeOpacity={0.8}
			style={styles.gridItem}
			onPress={props.onSelect}
		>
			<View style={{...styles.container, backgroundColor: props.color, }}>
				<Text style={styles.title} numberOfLines={2} >{props.title}</Text>
			</View>
		</TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 10,
    },
    container: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right',
    }
});

export default GategoryGridTile;