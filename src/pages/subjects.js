import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  Dimensions,
  Modal
} from 'react-native';

import SubjectList from './subjectList';


const scrollEnabled = true

const Subjects = ( {navigation}) => { 

    
    return (
    <View style={ styles.backgroundApp }>
        <View style={styles.headerStyle}>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Image source={require('../icons/Flecha.png')} style={styles.returnButton}/>

            </TouchableOpacity>
            <Image source={require('../icons/icones/Disciplinas.png')} style={{resizeMode: 'center', width: 30,
            height: 30, flex: 1, alignSelf: 'center', marginRight: '10%'}} />

        </View>
        <View style={{flex: 5, paddingBottom: 20}}>
            <ScrollView 
            scrollEnabled={this.scrollEnabled}
            contentContainerStyle={{justifyContent: 'space-between'}} 
            >
                 <View style={{
                    flex: 5, alignItems: 'center',
                    flexDirection: 'column', justifyContent: 'space-between', width: '100%'
                }}>

                    <SubjectList subject={this.state.subjects} navigation={navigation}/>

                </View>
            
            </ScrollView>
            
        </View>
        <View style={{position: 'absolute', zIndex: 1, end: 1, top: '80%'
                            }}>

            <TouchableOpacity onPress={() => navigation.navigate('AddSubjectScreen', {subjects: this.state.subjects,})}>

                <Image source={require('../icons/Add.png')} style={{
                    resizeMode: 'center', width: 75, height: 75,
                }} />

            </TouchableOpacity>

        </View>

    </View>
)
}

const styles = StyleSheet.create({

    returnButton: {
			resizeMode: 'center',
			width: 20, 
			height: 35, 
			marginTop: 20, 
			marginLeft: 15, 
			tintColor: 'white',
			marginBottom: 30,
    },

    backgroundApp: {
    	flex: 1,
      backgroundColor: '#55b15e',
    },

    headerStyle: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%'
    }

})





export default Subjects;