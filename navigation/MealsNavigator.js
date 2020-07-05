import { Platform } from 'react-native';

//navigation imports
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//screen imports
import CategoriesScreen from './../screens/CategoriesScreen';
import CategoryMealsScreen from './../screens/CategoryMealsScreen';
import MealDetailScreen from './../screens/MealDetailScreen';

//constants imports
import Colors from './../constants/Colors';

const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen,
		},
		CategoryMeals: {
			screen: CategoryMealsScreen,
		},
		MealDetail: MealDetailScreen,
	},
	{
        initialRouteName: 'Categories',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor,
                shadowOffset: {
                    height: 0,
                },
                elevation: 0,
            },
            headerTintColor: 'white',
        },
	}
);

export default createAppContainer(MealsNavigator);
