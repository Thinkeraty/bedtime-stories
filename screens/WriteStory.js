import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class WriteStory extends React.Component {
    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', textAlign: 'center', marginTop: 100, marginBottom: 100}}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>Write A Story...</Text>
                
                <TextInput
                    multiline
                    style={{ height: 100, borderColor: 'gray', borderWidth: 1, width: 300, marginTop: 50, marginBottom: 40 }}
                />

                <TouchableOpacity style={{backgroundColor: '#f00', padding: 10, margin: 10}}>
                    <Text style={{color: 'white'}}>Create Story</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}