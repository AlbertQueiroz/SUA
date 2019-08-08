import React , { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Animated
} from 'react-native';

const App = () => (
  
  <View style={ styles.backgroundApp }>

    <View style={ styles.headerApp }>
      
      <TouchableOpacity onPress={()=> (alert('Lampada!'))} activeOpacity={0.5} >
        <Image source={require('./icons/Lamp.png')} style={ styles.headerButtons }/>   
      </TouchableOpacity>

      <Image source={require('./icons/Logo.png')} style={styles.headerLogo} resizeMode={'center'}/>

      <TouchableOpacity onPress={()=> (alert('Usuário!'))} activeOpacity={0.5} >
        <Image source={require('./icons/Usuario.png')} style={ styles.headerButtons }/>    
      </TouchableOpacity>

    </View>

    <View style={ styles.menuApp }>
      
      <TouchableOpacity onPress={() => Alert.alert("Horário!")} activeOpacity={0.5} >
        <Image source={require('./icons/Horario.png')} style={ styles.menuButtons } />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => Alert.alert("disciplinas!")} activeOpacity={0.5} >
        <Image source={require('./icons/Disciplinas.png')} style={ styles.menuButtons } />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => Alert.alert("Calendário!")} activeOpacity={0.5} >
        <Image source={require('./icons/Calendario.png')} style={ styles.menuButtons } />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => Alert.alert("Anotações!")} activeOpacity={0.5} >
        <Image source={require('./icons/Anotações.png')} style={ styles.menuButtons } />
      </TouchableOpacity>      
      
      <TouchableOpacity onPress={() => Alert.alert("Atividades!")} activeOpacity={0.5} >
        <Image source={require('./icons/Atividades.png')} style={ styles.menuButtons } />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => Alert.alert("Boletim!")} activeOpacity={0.5} >
        <Image source={require('./icons/Boletim.png')} style={ styles.menuButtons } />
      </TouchableOpacity>

    </View>

    <View style={{flex: 1}}/>

  </View>
  
)

const styles = StyleSheet.create({
  
  menuButtons: {
    resizeMode: 'center',
    width: 170,
    height: 50,
  },

  backgroundApp: {
    flex: 1,
    backgroundColor: '#55b15e',
  },

  headerApp: {
    flexDirection: 'row', 
    flex: 1, 
    justifyContent: 'space-between', 
    paddingTop: 10, 
    paddingLeft: 20,
    paddingRight: 20,
  },

  menuApp: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerButtons: {
    width: 45, 
    height: 45, 
    resizeMode: 'center', 
    marginTop: 18,
  },

  headerLogo: {
    width: 80, 
    height: 80, 
    resizeMode: 'center',
  },

  });

export default App;