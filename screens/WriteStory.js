import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class WriteStory extends React.Component {
    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', textAlign: 'center', marginTop: 100, marginBottom: 100}}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>Write A Story...</Text>
                
                <TextInput
                    numberOfLines = {4}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginTop: 50 }}
                    onChangeText={text => onChangeText(text)}
                />
                
            </View>
        )
    }
}