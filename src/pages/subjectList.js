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
    subjects: []
}





const SubjectList = ( props ) => {
    
    

        async function loadSubjects() {
            const realm = await getRealm();
    
            const data = realm.objects('SubjectsSchema');
    
            this.state.subjects = data;
            
        }
        
        loadSubjects();



    return (
        <View style={{flex: 1}}>
        <FlatList
        data={this.state.subjects}
        renderItem={({item}) => 
            <View style={styles.subjectStyle}>
            <TouchableOpacity onPress={() => props.navigation.navigate('EditSubjectScreen', {
                id: item.id,
                subject: item.subject,
                professor: item.professor,
            })} style={{flex: 1}}>
                <View>
                    <Text style={{ fontSize: 20, color: '#55b15e', alignSelf: 'center', fontWeight: 'bold' }}>{item.subject}</Text>
                    <Text style={{ fontSize: 15, color: '#808080', marginLeft: 10 }}>{item.professor}</Text>
                </View>
            </TouchableOpacity>
        </View>} numColumns={1}
        />
        </View>
        )}

const styles = StyleSheet.create({
    subjectStyle: {
        width: 300, height: 140, backgroundColor: 'white', marginTop: 20, borderRadius: 10
    }

})


export default SubjectList;