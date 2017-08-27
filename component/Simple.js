import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Simple extends React.Component {
    render() {
        const styles = StyleSheet.create({
            bigblue: {
                color: 'blue',
                fontWeight: 'bold',
                fontSize: 30,
            },
            red: {
                color: 'red',
            },
        });
        return (
            <div>
                <h1 style = {styles.red}>Welcome to react native .... !! </h1>
            </div>
        );
    }
}