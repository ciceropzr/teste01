/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {name: 'Evelyn'}
  }

  somar(n1, n2){
    return n1 + n2;
  };

  render() {
    var nome = 'Evelyn';

    let imagem = {
      uri:'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png'
    };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello Word</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text>Meu nome é: {nome} </Text>
        <Text>A soma de 2 + 2 é {this.somar(2, 2)} </Text>
        <TextInput  style={styles.Input} placeholder="Qual é o seu nome?"/>
        <Button title="Aperte" onPress={()=>{}} />
        <Button title="Aperte" onPress={()=>{alert("Me Apertou")}} />
        <Image source={require('./estudio.png')} />
        <Image source={imagem} style={{width:100, height:100}}/>
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Input:{
    width:150,
    borderWidth: 1,
    borderColor: '#000000',
    margin:10,
    padding:10
  }
});
