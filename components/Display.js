import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ input, result }) => {
    return (
        <View style={styles.display}>
            <Text style={styles.inputText}>{input}</Text>
            {result !== '' && <Text style={styles.resultText}>= {result}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    display: {
        width: '80%',
        alignItems: 'flex-end',
        marginBottom: 30,
    },
    inputText: {
        fontSize: 40,
        color: '#333',
    },
    resultText: {
        fontSize: 30,
        color: '#666',
    },
});

export default Display;
