import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

//data imports
import { CATEGORIES } from './../data/dummy-data';

class CategoryMealsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		const categoryId = navigation.getParam('categoryId');

		const selectedCategory = CATEGORIES.find((category) => category.id === categoryId);

		return {
			title: selectedCategory.title,
		};
	};

	render() {
		const categoryId = this.props.navigation.getParam('categoryId');

		const selectedCategory = CATEGORIES.find((category) => category.id === categoryId);

		return (
			<View style={styles.screen}>
				<Text>The Category Meals Screen!</Text>
				<Text>{selectedCategory.title}</Text>
				<Button
					title="Go to Details"
					onPress={() => {
						this.props.navigation.navigate({ routeName: 'MealDetail' });
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealsScreen;
