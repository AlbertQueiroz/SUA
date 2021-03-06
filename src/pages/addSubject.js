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
import getRealm from '../../services/realm'

toBeSaved = {
    id: null,
    subject: 'SUBJECT DEFAULT',
    professor: 'PROFESSOR DEFAULT',
}
state = {
    subjects: []
}

onchangeSubject = (subject) => {
    this.toBeSaved.subject = subject;
}
onchangeProfessor = (professor) => {
    this.toBeSaved.professor = professor;
}

const AddSubject = ({ navigation }) => {




    async function saveSubject(subject, navigation) {
        const data = {
            id: this.state.subjects.length,
            subject: subject.subject,
            professor: subject.professor,
        }
        const realm = await getRealm();

        realm.write(() => {
            realm.create('SubjectsSchema', data);
        });
        navigation.goBack();
    }

    
    return(
    < View style = { styles.backgroundApp } >
        <View style={styles.headerStyle}>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <Image source={require('../icons/Flecha.png')} style={styles.returnButton} />

            </TouchableOpacity>
            <Image source={require('../icons/icones/Disciplinas.png')} style={{
                resizeMode: 'center', width: 30,
                height: 30, flex: 2, marginLeft: 15
            }} />
            <TouchableOpacity style={{ paddingRight: '3%' }} onPress={() => navigation.goBack()}>

                <Image source={require('../icons/DeleteIcon.png')} style={{
                    resizeMode: 'center',
                    width: 40, height: 40, tintColor: 'white', marginLeft: 15, flex: 1
                }} />

            </TouchableOpacity>
        </View>

        <View style={{
            flex: 6, flexDirection: 'column', alignItems: 'center',
        }}>
            <KeyboardAvoidingView style={{ height: '30%', width: '80%' }} behavior={'padding'}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 25, color: 'white', width: '80%', height: '25%' }}>Disciplina</Text>
                    <View style={{ width: '100%', backgroundColor: 'white', height: '40%', borderRadius: 10 }}>

                        <TextInput style={{ flex: 1, fontWeight: 'bold', fontSize: 15 }}
                            autoCapitalize={'characters'} scrollEnabled={false} maxLength={32}
                            onChangeText={(subject) => this.onchangeSubject(subject)}
                        />

                    </View>
                </View>
            </KeyboardAvoidingView>

            <KeyboardAvoidingView style={{ height: '30%', width: '80%', }} behavior={'height'}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 25, color: 'white', width: '80%', height: '25%' }}>Professor</Text>
                    <View style={{ width: '100%', backgroundColor: 'white', height: '40%', borderRadius: 10 }}>

                        <TextInput style={{ flex: 1, fontSize: 15 }}
                            autoCapitalize={'characters'} scrollEnabled={false} maxLength={32}
                            onChangeText={(professor) => this.onchangeProfessor(professor)} />

                    </View>
                </View>
            </KeyboardAvoidingView>




        </View>

        <View style={{ flex: 1, flexDirection: 'row-reverse', width: '100%' }}>

            <TouchableOpacity onPress={() => saveSubject(toBeSaved, navigation)} style={{ paddingTop: '3%', paddingBottom: '3%', paddingRight: '3%' }}>

                <Image source={require('../icons/SaveIcon.png')} style={{
                    resizeMode: 'center', width: 60, height: 60, borderRadius: 100,
                }} />

            </TouchableOpacity>

        </View>
        
    </View >
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






export default AddSubject;