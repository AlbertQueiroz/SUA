import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

const Calendar = ( {navigation}) => (
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

        <View style={{flex: 5}}>

        </View>

        <View style={{ flex: 1, flexDirection:'row-reverse', margin: 20 }}>

            <TouchableOpacity>

                <Image source={require('../icons/Add.png')} style={{
                    resizeMode: 'center', width: 60, height: 60,
                }} />

            </TouchableOpacity>

        </View>

    </View>
)


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
        alignItems: 'center'
    }

})

export default Calendar;