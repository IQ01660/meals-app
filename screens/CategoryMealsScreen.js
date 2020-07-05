import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

//component imports
import MealItem from './../components/MealItem';

//constant imports
import Colors from './../constants/Colors';

//data imports
import { CATEGORIES, MEALS } from './../data/dummy-data';

class CategoryMealsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		const categoryId = navigation.getParam('categoryId');

		const selectedCategory = CATEGORIES.find((category) => category.id === categoryId);

		return {
			title: selectedCategory.title,
		};
	};

	renderMealItem = (itemData) => {
		return (
			<MealItem
				title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                imageUrl = {itemData.item.imageUrl}
				onSelect={() => {
					this.props.navigation.navigate('MealDetail', {
						mealId: itemData.item.id,
					});
				}}
			/>
		);
	};

	render() {
		const categoryId = this.props.navigation.getParam('categoryId');

		const displayedMeals = MEALS.filter((meal, index, meals) => {
			return meal.categoryIds.includes(categoryId);
		});

		return (
			<View style={styles.screen}>
				<View style={{width: '90%', flex: 1, }}>
					<FlatList data={displayedMeals} renderItem={this.renderMealItem} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: Colors.primaryColor
	},
});

export default CategoryMealsScreen;
