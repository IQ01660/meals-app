import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class MealDetailScreen extends Component
{
    render() 
    {
        return (
            <View style={styles.screen} >
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
    }
});

export default MealDetailScreen;