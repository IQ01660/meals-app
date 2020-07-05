import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

//data imports
import { CATEGORIES } from './../data/dummy-data';

//component imports
import CategoryGridTile from './../components/CategoryGridTile';

/**
 * The function to pass in to
 * categories Flatlist in [CategoriesScreen.js]
 * @param {*} itemData contains {item, index, separators}
 */
const renderGridItem = (itemData, props) => {
	return (
		<CategoryGridTile
            color={itemData.item.color}
			onSelect={() => {
				props.navigation.navigate('CategoryMeals', {
					categoryId: itemData.item.id,
				});
			}}
            title={itemData.item.title}
		/>
	);
};

class CategoriesScreen extends Component {
	static navigationOptions = {
		title: 'Meal Categories',
	};

	render() {
		return (
			<FlatList
				data={CATEGORIES}
				numColumns={2}
				renderItem={(itemData) => renderGridItem(itemData, this.props)}
			/>
		);
	}
}

const styles = StyleSheet.create({});

export default CategoriesScreen;
