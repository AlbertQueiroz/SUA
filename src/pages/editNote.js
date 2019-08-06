import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

import getRealm from '../../services/realm';
import NotesSchema from '../schemas/notesSchema';


// state = {
//     noteToUpdate: {id:0, title: '', date:'', content: ''},

// }

// updateTitle = (value) => {
//     this.state.noteToUpdate.title = value;

// }

// updateDate = (value) => {
//     this.state.noteToUpdate.date = value;

// }

// updateContent = (value) => {
//     this.state.noteToUpdate.content = value;
// }


const EditNotes = ( {navigation} ) => {

    async function deleteNotes(ID, navigation){
            const realm = await getRealm();

            realm.write(() => {

                let dataToBeDeleted = realm.objects('NotesSchema').filtered('id = '+ID);

                realm.delete(dataToBeDeleted);

            })
        }

    state = {
        note: {id: navigation.getParam('id'),title: navigation.getParam('title')
        ,date: navigation.getParam('date'),content: navigation.getParam('content'),}
    }

    const ID = navigation.getParam('id');

    alert(ID);
    
    return(
    <View style={ styles.backgroundApp }>
        <View style={styles.headerStyle}>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Image source={require('../icons/Flecha.png')} style={styles.returnButton}/>

            </TouchableOpacity>
                            <Image source={require('../icons/Notes.png')} style={{resizeMode: 'center', width: 30,
                             height: 30, flex: 2, marginLeft: 15}} />            
            <TouchableOpacity style={{paddingRight: '3%'}}>

                <Image source={require('../icons/DeleteIcon.png')} style={{resizeMode: 'center',
                width: 40, height: 40, tintColor: 'white', marginLeft: 15, flex: 1}}
                onPress={(ID, navigation) => deleteNotes(ID, navigation)} />

            </TouchableOpacity>
        </View>
        
        
        <View style={{
            flex: 6, flexDirection: 'column', alignItems: 'center', 
        }}>
            <KeyboardAvoidingView style={{height:'30%', width:'80%'}} behavior={'padding'}>
            <View style={{flex: 1}}>
                <Text style={{ fontSize: 20, color: 'black', width: '80%', height: '25%'}}>Título</Text>
                <View style={{ width: '100%', backgroundColor: 'white', height: '55%', borderRadius: 10}}>

                    <TextInput style={{ flex: 1, fontWeight: 'bold', fontSize: 15 }} autoCapitalize={'characters'} 
                    value={state.note.title}/>

                </View>
            </View>
            </KeyboardAvoidingView>

            <KeyboardAvoidingView style={{height:'30%', width:'80%',}} behavior={'height'}>
            <View style={{flex: 1}}>
                <Text style={{ fontSize: 20, color: 'black', width: '80%', height: '25%'}}>Data</Text>
                <View style={{ width: '100%', backgroundColor: 'white', height: '55%', borderRadius: 10}}>

                    <TextInput style={{ flex: 1,fontSize: 15 }}
                    value={state.note.date}
                    />

                </View>
            </View>
            </KeyboardAvoidingView>

            <KeyboardAvoidingView style={{height:'40%', width:'80%', }} behavior={'height'} >
            <View style={{flex: 1}}>
                <Text style={{ fontSize: 20, color: 'black', width: '80%', height: '20%'}}>Conteúdo</Text>
                <View style={{
                    width: '100%', backgroundColor: 'white', height: '80%', borderRadius: 10,
                }}>

                    <TextInput style={{ flex: 1, fontSize: 15 }} multiline={true}
                    scrollEnabled={true} maxLength={400}
                    value={state.note.content} 
                    />

                </View>
            </View>
            </KeyboardAvoidingView>



        </View>

        <View style={{flex: 1, flexDirection: 'row-reverse', width: '100%'}}>

            <TouchableOpacity onPress={() => alert('disgraça', 'disgraça')} style={{paddingTop: '3%', paddingBottom: '3%', paddingRight: '3%' }}>

                <Image source={require('../icons/SaveIcon.png')} style={{
                    resizeMode: 'center', width: 60, height: 60, borderRadius: 100,
                }} />

            </TouchableOpacity>

        </View>
        
    </View>
)
}

const styles = StyleSheet.create({

    returnButton: {
			resizeMode: 'center',
			width: 30, 
			height: 25, 
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
        height: '10%'
    }

})





export default EditNotes;