import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStory extends React.Component {
    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', textAlign: 'center', marginTop: 100, marginBottom: 100}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>There was once a king and a queen.... You decide the rest.</Text>
            </View>
        )
    }
}