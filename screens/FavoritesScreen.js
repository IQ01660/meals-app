import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class FavoritesScreen extends Component
{
    render() 
    {
        return (
            <View style={styles.screen} >
                <Text>The Favorites Screen!</Text>
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

export default FavoritesScreen;