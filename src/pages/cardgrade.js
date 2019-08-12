import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Button
  } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
 
export default class CardGrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', 'AV1','AV2','AV1','AV2'],
      tableTitle: ['Fisica', 'PLIN', 'Inglês', 'Fisica I'],
      tableData: [
        ['10.5', '7.0', '8.0', '5.0', '4.5'],
        ['10.5', '7.0', '8.0', '5.0', '4.5'],
        ['10.5', '7.0', '8.0', '5.0', '4.5'],
        ['10.5', '7.0', '8.0', '5.0', '4.5'],
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
    <View style={ styles.backgroundApp }>
        <View style={styles.headerStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>

                <Image source={require('../icons/Flecha.png')} style={styles.returnButton}/>

            </TouchableOpacity>
			    <Image source={require('../icons/icones/Boletim.png')} style={{resizeMode: 'center', width: 30, height: 30, flex: 1, marginLeft: 100}} />            
            <TouchableOpacity>

                <Image source={require('../icons/Opções.png')} style={{resizeMode: 'center',
                width: 70, height: 70, tintColor: 'white', paddingLeft: 30, marginBottom: 10, marginLeft: 20, flex: 1}} />
                
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <Table borderStyle={{borderWidth: 0, borderColor: 'transparent'}}>
            <Row data={state.tableHead} flexArr={[1, 1, 1, 1, 1, 1, 1, 1]} style={styles.head} textStyle={styles.textDay}/>
            <TableWrapper style={styles.wrapper}>
                <Col data={state.tableTitle} style={styles.title} heightArr={[80,80,80,80]} textStyle={styles.textHour}/>
                <Rows data={state.tableData} flexArr={[1, 1, 1, 1, 1, 1, 1]} style={styles.row} textStyle={styles.textDisc}/>
            </TableWrapper>
            </Table>
        </View>
        <View style={{flex:2}}></View>
        <View style={{position: 'absolute', zIndex: 1, end: 1, top: '80%'
                            }}>

            <TouchableOpacity onPress={() => {alert("Adicionar Nota")}}>

                <Image source={require('../icons/Add.png')} style={{
                    resizeMode: 'center', width: 75, height: 75,
                }} />

            </TouchableOpacity>

        </View>
    </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { 
    flex: 5,
    padding: 4, 
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 380
    },
    head: {  
        height: 60,  
        backgroundColor: '#fff'  
        },
    wrapper: { 
        flexDirection: 'row'
        },
    title: {
        flex: 1,
        },
    row: { 
        height: 80,
        },
    textDay: { 
        textAlign: 'center',
        color:'#55b15e'
        },
    textHour: { 
        textAlign: 'center',
        color:'#55b15e'
        },
    textDisc: { 
        textAlign: 'center',
        color:'#666',
        },
    backgroundApp: {
        flex:1,
        backgroundColor: '#55b15e'
    },
    headerStyle: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    returnButton: {
        resizeMode: 'center',
        width: 19, 
        height: 19, 
        marginTop: 20, 
        marginLeft: 15, 
        tintColor: 'white',
        marginBottom: 30,
        flex: 1
    }

});