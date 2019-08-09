import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

const Mainmenu = ({ navigation }) => (
  <View style={ styles.backgroundApp }>

    <View style={ styles.headerApp }>
      
      <Image source={require('../icons/Logo.png')} style={styles.headerLogo} resizeMode={'center'}/>


    </View>
      <View style={{ flex: 3, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('ScheduleScreen')} activeOpacity={0.5} >
          <Image source={require('../icons/Horario.png')} style={ styles.menuButtons } />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('SubjectsScreen')} activeOpacity={0.5} > 
          <Image source={require('../icons/Disciplinas.png')} style={ styles.menuButtons } />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('CalenderScreen')} activeOpacity={0.5} >     
          <Image source={require('../icons/Calendario.png')} style={ styles.menuButtons } />      
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('NotesScreen')}  >
          <Image source={require('../icons/Anotações.png')} style={styles.menuButtons} />
        </TouchableOpacity>      
        
        <TouchableOpacity onPress={() => navigation.navigate('ActivitiesScreen')} activeOpacity={0.5} >  
          <Image source={require('../icons/Atividades.png')} style={ styles.menuButtons } />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('CardgradeScreen')} activeOpacity={0.5} >  
          <Image source={require('../icons/Boletim.png')} style={ styles.menuButtons } />
        </TouchableOpacity>
      </View>
  </View>

)

const styles = StyleSheet.create({
  
  menuButtons: {
    resizeMode: 'center',
    width: 150,
    height: 50
  },

  backgroundApp: {
    flex: 1,
    backgroundColor: '#55b15e',
  },

  headerApp: { 
    flex: 1, 
    alignItems: 'center'
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
    resizeMode: 'center',
    opacity: 0.75
  },

  });

  export default Mainmenu;
