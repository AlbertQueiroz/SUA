import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import{
    Table,
    Row,
    Rows
} from 'react-native-table-component'
const Cardgrade = ( {navigation}) => (
    <View style={ styles.backgroundApp }>
        <View style={styles.headerStyle}>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Image source={require('../icons/Flecha.png')} style={styles.returnButton}/>

            </TouchableOpacity>
			<Image source={require('../icons/icones/Boletim.png')} style={{resizeMode: 'center', width: 30, height: 30, flex: 2, marginLeft: 80}} />            
            <TouchableOpacity>

                <Image source={require('../icons/Opções.png')} style={{resizeMode: 'center',
                width: 70, height: 70, tintColor: 'white', paddingLeft: 30, marginBottom: 10, marginLeft: 20, flex: 1}} />

            </TouchableOpacity>
        </View>

        <View style={{flex: 5, backgroundColor:'white', padding:16, width:300, height: 300, marginLeft:50, borderRadius:10}}>
            <Table borderStyle={{borderWidth: 4, borderColor: '#55b15e'}}>
                <Row/>
            </Table>
            <ScrollView>
              <Table borderStyle={{borderWidth:4, borderColor: '#55b15e'}}>
                  <Row/>
              </Table>
            </ScrollView>
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

export default Cardgrade;