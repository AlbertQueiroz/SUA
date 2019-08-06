import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList
} from 'react-native';
import getRealm from '../../services/realm';

state = {
    notes: []
}





const NoteList = ( props ) => {
    
    
    // useEffect(() => {
    //     async function loadNotes() {
    //         const realm = await getRealm();
    
    //         const data = realm.objects('NotesSchema');
    
    //         this.state.notes = data;
            
    //         alert(data.title);
    //     }
        
    //     loadNotes();
    
    
    // }, []);

        async function loadNotes() {
            const realm = await getRealm();
    
            const data = realm.objects('NotesSchema');
    
            this.state.notes = data;
            
        }
        
        loadNotes();



    return (
        <View style={{flex: 1}}>
        <FlatList
        data={this.state.notes}
        renderItem={({item}) => 
            <View style={styles.noteStyle}>
            <TouchableOpacity onPress={() => props.navigation.navigate('EditNoteScreen', {
                id: item.id,
                title: item.title,
                date: item.date,
                content: item.content,
            })} style={{flex: 1}}>
                <View>
                    <Text style={{ fontSize: 20, color: 'black', alignSelf: 'center', fontWeight: 'bold' }}>{item.title}</Text>
                    <Text style={{ fontSize: 15, color: 'black', marginLeft: 10 }}>{item.date}</Text>
                    <Text style={{ fontSize: 15, color: 'black', marginLeft: 10 }}>{item.content}</Text>
                </View>
            </TouchableOpacity>
        </View>} numColumns={1}
        />
        </View>
        )}

const styles = StyleSheet.create({
    noteStyle: {
        width: '100%', height: 140, backgroundColor: 'white', marginTop: 20, borderRadius: 10
    }




})


export default NoteList;