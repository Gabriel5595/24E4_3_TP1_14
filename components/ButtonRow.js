import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

const ButtonRow = ({ values, onButtonPress, onClear, onEqual }) => {
    return (
        <View style={styles.row}>
            {values.map((value) => {
                if (value === 'C') {
                    return <Button key={value} title={value} onPress={onClear} />;
                }
                if (value === '=') {
                    return <Button key={value} title={value} onPress={onEqual} />;
                }
                return <Button key={value} title={value} onPress={() => onButtonPress(value)} />;
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});

export default ButtonRow;
