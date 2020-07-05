import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = (props) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity activeOpacity={0.8} onPress={props.onSelect}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground source={{ uri: props.imageUrl }} style={styles.bgImage}>
							<Text style={styles.title} numberOfLines={1} >{props.title}</Text>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<Text>{props.duration}m</Text>
						<Text>{props.complexity.toUpperCase()}</Text>
						<Text>{props.affordability.toUpperCase()}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		width: '100%',
		height: 200,
        backgroundColor: '#ccc',
        marginVertical: 10,
        borderRadius: 10,
        overflow: "hidden",
	},
	bgImage: {
		width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
	},
	mealRow: {
        flexDirection: 'row',
	},
	mealHeader: {
        height: '85%',
    },
    title: {
        color: 'white',
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        textAlign: 'center'
    },
	mealDetail: {
		height: '15%',
		paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
	},
});

export default MealItem;
