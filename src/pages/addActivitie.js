import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  CheckBox
} from 'react-native';






const addActivitie = ({navigation}) => (

   
    <View style={ styles.backgroundApp }>
        <View style={styles.headerStyle}>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Image source={require('../icons/Flecha.png')} style={styles.returnButton}/>

            </TouchableOpacity>
                            <Image source={require('../icons/icones/Activities.png')} style={{resizeMode: 'center', width: 30,
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
            
        <View style={{flex: 2, flexDirection: 'row', alignItems: 'center' , justifyContent: 'space-evenly' }}>
            

            <TouchableOpacity>

            <View style={{ width: 350, backgroundColor: 'white', height: 55, borderRadius: 10, marginRight: 15, alignItems: 'stretch'}}>
            <CheckBox
                style={{flex: 1}}
                containerStyle={{}}
                checkedIcon={<Image source={require('../icons/Check.png')} />}
                uncheckedIcon={<Image source={require('../icons/Logo.png')} />}
                checked={this.state.checked}
                onPress={() => this.setState({checked: !this.state.checked})}
                center={true}
                
                />
            
            </View>
            
            </TouchableOpacity>

        </View>
            </KeyboardAvoidingView>




        </View>

        <View style={{flex: 1, flexDirection: 'row-reverse', width: '100%'}}>

            <TouchableOpacity onPress={() => updateNotes()} style={{paddingTop: '3%', paddingBottom: '3%', paddingRight: '3%' }}>

                <Image source={require('../icons/SaveIcon.png')} style={{
                    resizeMode: 'center', width: 60, height: 60, borderRadius: 100,
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
        alignItems: 'center',
        height: '10%'
    }

})






export const caraio = this.toBeSaved;
export default addActivitie;