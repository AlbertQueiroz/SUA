import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  Dimensions
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import NoteList from './noteList';

// state = {
//     notes: [
//         {id: 0, title: 'first', date:'04/06/2000', content: 'first note'},
//     ]
// }


// const {height} = Dimensions.get('window');

// onContentSizeChange = (contentWidth, contentHeight) => {
//     this.state.screenHeight = contentHeight;
//     alert('size changed');
//     if (scrollEnabled){
//         alert('ScrollEnabled true!');
//     }

// }

// const scrollEnabled = this.state.screenHeight > height;

const scrollEnabled = true


const Notes = ( {navigation}) => { 
    
    return (
    <View style={ styles.backgroundApp }>
        <View style={styles.headerStyle}>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Image source={require('../icons/Flecha.png')} style={styles.returnButton}/>

            </TouchableOpacity>
							<Image source={require('../icons/Notes.png')} style={{resizeMode: 'center', width: 30, height: 30, flex: 2, marginLeft: 40}} />            
            <TouchableOpacity>

                <Image source={require('../icons/Opções.png')} style={{resizeMode: 'center',
                width: 70, height: 70, tintColor: 'white', paddingLeft: 30, marginBottom: 10, marginLeft: 20, flex: 1}} />

            </TouchableOpacity>
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

                    <NoteList note={this.state.notes} navigation={navigation}/>

                </View>
            
            </ScrollView>

                <View style={{position: 'absolute', zIndex: 1, end: 1, top: '80%'
                            }}>

                    <TouchableOpacity onPress={() => navigation.navigate('AddNoteScreen', {notes: this.state.notes,})}>

                        <Image source={require('../icons/Add.png')} style={{
                            resizeMode: 'center', width: 60, height: 60,
                        }} />

                    </TouchableOpacity>

                </View>
            
        </View>
    </View>
)
}

const styles = StyleSheet.create({

    returnButton: {
			resizeMode: 'center',
			width: 19, 
			height: 19, 
			marginTop: 20, 
			marginLeft: 15, 
			tintColor: 'white',
			marginBottom: 30,
			flex: 1
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





export default Notes;