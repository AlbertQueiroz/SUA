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
    activities: []
}





const ActivitieList = ( props ) => {
    
    
    // useEffect(() => {
    //     async function loadActivities() {
    //         const realm = await getRealm();
    
    //         const data = realm.objects('ActivitiesSchema');
    
    //         this.state.activities = data;
            
    //         alert(data.title);
    //     }
        
    //     loadActivities();
    
    
    // }, []);

        async function loadActivities() {
            const realm = await getRealm();
    
            const data = realm.objects('ActivitiesSchema');
    
            this.state.activities = data;
            
        }
        
        loadActivities();



    return (
        <View style={{flex: 1}}>
        <FlatList
        data={this.state.activities}
        renderItem={({item}) => 
            <View style={styles.activitieStyle}>
            <TouchableOpacity onPress={() => props.navigation.navigate('EditActivitieScreen', {
                id: item.id,
                title: item.title,
                content: item.content,
            })} style={{flex: 1}}>
                <View>
                    <Text style={{ fontSize: 20, color: '#55b15e', alignSelf: 'center', fontWeight: 'bold' }}>{item.title}</Text>
                    <Text style={{ fontSize: 15, fontWeight:'bold', color: '#808080', marginLeft: 10 }}>{(item.date)}</Text>
                    <Text style={{ fontSize: 15, color: '#808080', marginLeft: 10 }}>{item.content}</Text>
                </View>
            </TouchableOpacity>
        </View>} numColumns={1}
        />
        </View>
        )}

const styles = StyleSheet.create({
    activitieStyle: {
        width: 300, height: 140, backgroundColor: 'white', marginTop: 20, borderRadius: 10
    }

})


export default ActivitieList;