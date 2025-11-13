import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handlePress = () => {
    if (nome.trim() === '') {
      setMensagem('Por favor, digite seu nome!');
    } else {
      setMensagem(`Olá, ${nome}! Bem-vindo ao React Native 🚀`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Primeiro App com React Native</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      {/* Exemplo com Button */}
      <Button title="Enviar" onPress={handlePress} color="#6200ee" />

      {/* Exemplo alternativo com TouchableOpacity */}
      {/* 
      <TouchableOpacity style={styles.botao} onPress={handlePress}>
        <Text style={styles.textoBotao}>Enviar</Text>
      </TouchableOpacity> 
      */}

      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: '#6200ee',
    padding: 12,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mensagem: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});
