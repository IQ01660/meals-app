import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';

//for performance optimization
import { enableScreens } from 'react-native-screens';

//importing screens
import { AppLoading } from 'expo';

//importing navigators
import MealsNavigator from './navigation/MealsNavigator';

//importing fonts
import * as Font from 'expo-font';

//performance optimization
enableScreens();

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});
};

class App extends Component {
	state = {
		loadedFonts: false,
	};

	render() {
		//render loading screen if fonts not loaded
		if (!this.state.loadedFonts) {
			return (
				<AppLoading
					startAsync={fetchFonts}
					onFinish={() => this.setState({ loadedFonts: true })}
					onError={console.warn}
				/>
			);
		}

		return (
			<>
				<MealsNavigator />
                <StatusBar barStyle="light-content" />
			</>
		);
	}
}

export default App;

const styles = StyleSheet.create({});
