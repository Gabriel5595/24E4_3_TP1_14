import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from './components/Display';
import Button from './components/Button';
import ButtonRow from './components/ButtonRow';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      setResult(eval(input).toString());
    } catch (e) {
      setResult('Erro');
    }
  };

  return (
    <View style={styles.container}>
      <Display input={input} result={result} />
      <View style={styles.buttons}>
        <ButtonRow
          values={['7', '8', '9', '/']}
          onButtonPress={handleButtonPress}
        />
        <ButtonRow
          values={['4', '5', '6', '*']}
          onButtonPress={handleButtonPress}
        />
        <ButtonRow
          values={['1', '2', '3', '-']}
          onButtonPress={handleButtonPress}
        />
        <ButtonRow
          values={['0', 'C', '=', '+']}
          onButtonPress={handleButtonPress}
          onClear={handleClear}
          onEqual={handleEqual}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  buttons: {
    width: '80%',
  },
});
