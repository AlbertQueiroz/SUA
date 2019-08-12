import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image
  } from 'react-native';
//import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
 
export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Hor', 'Seg', 'Ter', 'Qua','Qui','Sex','Sab','Dom'],
      tableTitle: ['AB', 'CD', 'EF', 'GH'],
      tableData: [
        ['Calculo I', 'Calculo II', 'Algebra Lin.', 'Fisica I', 'POO','Inglês', 'Plin'],
        ['Calculo I', 'Calculo II', 'Algebra Lin.', 'Fisica I', 'POO','Inglês', 'Plin'],
        ['Calculo I', 'Calculo II', 'Algebra Lin.', 'Fisica I', 'POO','Inglês', 'Plin'],
        ['Calculo I', 'Calculo II', 'Algebra Lin.', 'Fisica I', 'POO','Inglês', 'Plin']
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
    <View style={ styles.backgroundApp }>
        <View style={styles.headerStyle}>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Image source={require('../icons/Flecha.png')} style={styles.returnButton}/>

            </TouchableOpacity>
			    <Image source={require('../icons/icones/Disciplinas.png')} style={{resizeMode: 'center', width: 30, height: 30, flex: 2, marginLeft: 40}} />            
            <TouchableOpacity>

                <Image source={require('../icons/Opções.png')} style={{resizeMode: 'center',
                width: 70, height: 70, tintColor: 'white', paddingLeft: 30, marginBottom: 10, marginLeft: 20, flex: 1}} />
                
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <Table>
            <Row data={state.tableHead} flexArr={[0.7, 1, 1, 1, 1, 1, 1, 1]} style={styles.head} textStyle={styles.text}/>
            <TableWrapper style={styles.wrapper}>
                <Col data={state.tableTitle} style={styles.title} heightArr={[30,30,30,30]} textStyle={styles.text}/>
                <Rows data={state.tableData} flexArr={[1, 1, 1, 1, 1, 1, 1]} style={styles.row} textStyle={styles.text}/>
            </TableWrapper>
            </Table>
        </View>
    </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#fff' 
    },
    head: {  
        height: 40,  
        backgroundColor: '#f1f8ff'  
        },
    wrapper: { 
        flexDirection: 'row' 
        },
    title: { 
        flex: 1, 
        backgroundColor: '#f6f8fa' 
        },
    row: { 
        height: 30 
        },
    text: { 
        textAlign: 'center' 
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
});