import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from './../components/HeaderButton';

// data imports
import { MEALS } from './../data/dummy-data';

class MealDetailScreen extends Component {
	static navigationOptions = ({ navigation }) => {
        const mealId = navigation.getParam('mealId');
        
		const selectedMeal = MEALS.find((meal) => meal.id === mealId);

		return {
            title: selectedMeal.title,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item 
                        title="Favorite"
                        iconName="ios-star"
                        onPress={() => {
                            console.log("Mark as Favorite!!!");
                        }}
                    />
                </HeaderButtons>
            ),
		};
	};

	render() {
		return (
			<View style={styles.screen}>
				<Text>The Meal Detail Screen!</Text>
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

export default MealDetailScreen;
