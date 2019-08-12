import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

import {Component} from 'react';
import getRealm from '../../services/realm';


toBeSaved = {
    id: null,
    title: 'DEFAULT',
    date: '',
    content: '',
    
}

state = {
    notes: [],
    markedDays: []
}

 onchangeTitle = (title) => {
    this.toBeSaved.title = title;
    
 }  


onchangeContent = (content) => {
    this.toBeSaved.content = content;
}




const AddDay = ( {navigation}) =>{
    async function saveNote(note, navigation, dayToBeMarked) { //uso do await necessário

        const data = {
            id: this.state.notes.length,
            title: note.title,
            date: note.date,
            content: note.content,
            
        }

        const dayToBeMarkedOnDatabase = {
            id: this.state.markedDays.length,
            date: dayToBeMarked,
            title: note.title,
            content: note.content,
        }
    
        const realm = await getRealm();
    
        realm.write(() => {
            realm.create('NotesSchema', data);
            realm.create('MarkedDaysSchema', dayToBeMarkedOnDatabase);
            //let alldata = realm.objects('MarkedDaysSchema');
            //realm.delete(alldata);
        });
        
        alert('Salvo com sucesso!');
        navigation.goBack();
    }

    useEffect(() => {
        async function loadNotes() {
            const realm = await getRealm();
    
            const data = realm.objects('NotesSchema');
    
            this.state.notes = data;
        }
        loadNotes();

        async function loadMarkedDays(){
            const realm = await getRealm();
    
            const data = realm.objects('MarkedDaysSchema');
    
            this.state.markedDays = data;
        }
        loadMarkedDays();
    
    }, []);    

    const currentDate = navigation.getParam('daySaved');
    const currentDate1 = currentDate.day+'/'+currentDate.month+'/'+currentDate.year;
    this.toBeSaved.date = currentDate1;

    const dayToBeMarked = createDayToBeMarked(currentDate);
    function createDayToBeMarked(currentDate){
        var currentDay = currentDate.day < 10 ? '0'+currentDate.day : currentDate.day+'';
        var currentMonth = currentDate.month < 10 ? '0'+currentDate.month : currentDate.day+'';
        var dayToBeMarked = currentDate.year+'-'+currentMonth+'-'+currentDay;
        return dayToBeMarked;
    }


    return(
    <View style={ styles.backgroundApp }>
        <View style={styles.headerStyle}>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Image source={require('../icons/Flecha.png')} style={styles.returnButton}/>

            </TouchableOpacity>
                            <Image source={require('../icons/icones/Calendario.png')} style={{resizeMode: 'center', width: 30,
                             height: 30, flex: 2, marginLeft: 15}} />            
            <TouchableOpacity style={{paddingRight: '3%'}}  onPress={() => navigation.goBack()}>

                <Image source={require('../icons/DeleteIcon.png')} style={{resizeMode: 'center',
                width: 40, height: 40, tintColor: 'white', marginLeft: 15, flex: 1}} />

            </TouchableOpacity>
        </View>
        
        
        <View style={{
            flex: 6, flexDirection: 'column', alignItems: 'center', 
        }}>
            <KeyboardAvoidingView style={{height:'30%', width:'80%'}} behavior={'padding'}>
            <View style={{flex: 1}}>
                <Text style={{ fontSize: 20, color: 'black', width: '80%', height: '25%'}}>Título</Text>
                <View style={{ width: '100%', backgroundColor: 'white', height: '55%', borderRadius: 10}}>

                    <TextInput style={{ flex: 1, fontWeight: 'bold', fontSize: 15 }}
                     autoCapitalize={'characters'}
                     onChangeText={(title) => this.onchangeTitle(title)}
                     />

                </View>
            </View>
            </KeyboardAvoidingView>

            <KeyboardAvoidingView style={{height:'30%', width:'80%',}} behavior={'height'}>
            <View style={{flex: 1}}>
                <Text style={{ fontSize: 20, color: 'black', width: '80%', height: '25%'}}>Data</Text>
                <View style={{ width: '100%', backgroundColor: 'white', height: '55%', borderRadius: 10}}>

                    <TextInput style={{ flex: 1,fontSize: 15 }}
                    value={currentDate1}
                    editable={false}/>

                </View>
            </View>
            </KeyboardAvoidingView>

            <KeyboardAvoidingView style={{height:'40%', width:'80%', }} behavior={'height'} >
            <View style={{flex: 1}}>
                <Text style={{ fontSize: 20, color: 'black', width: '80%', height: '20%'}}>Conteúdo</Text>
                <View style={{
                    width: '100%', backgroundColor: 'white', height: '80%', borderRadius: 10,
                }}>

                    <TextInput style={{ flex: 1, fontSize: 15 }} 
                    multiline={true}
                    scrollEnabled={true} maxLength={400}
                    onChangeText={(content) => this.onchangeContent(content)}/>

                </View>
            </View>
            </KeyboardAvoidingView>



        </View>

        <View style={{flex: 1, flexDirection: 'row-reverse', width: '100%'}}>

            <TouchableOpacity onPress={() => saveNote(toBeSaved, navigation, dayToBeMarked)} style={{paddingTop: '3%', paddingBottom: '3%', paddingRight: '3%' }}>

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





export default AddDay;
