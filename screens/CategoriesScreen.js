import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

//data imports
import { CATEGORIES } from './../data/dummy-data';

/**
 * The function to pass in to
 * categories Flatlist in [CategoriesScreen.js]
 * @param {*} itemData contains {item, index, separators}
 */
const renderGridItem = (itemData, props) => {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={styles.gridItem}
			onPress={() => {
				props.navigation.navigate('CategoryMeals', {
                    "categoryId": itemData.item.id
                });
			}}
		>
			<View>
				<Text>{itemData.item.title}</Text>
			</View>
		</TouchableOpacity>
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

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
});

export default CategoriesScreen;
