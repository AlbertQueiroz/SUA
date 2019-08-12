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
import getRealm from '../../services/realm';



toBeSaved = {
    id: null,
    title: 'DEFAULT',
    date: '',
    content: '',
}
state = {
    activities: []
}


onchangeTitle = (title) => {
    this.toBeSaved.title = title;

}

onchangeDate = (date) => {
    this.toBeSaved.date = date;
}

onchangeContent = (content) => {
    this.toBeSaved.content = content;
}




const AddActivitie = ({ navigation }) => {

    async function saveActivitie(activitie, navigation) { //uso do await necessário para o uso

        const data = {
            id: this.state.activities.length,
            title: activitie.title,
            date: activitie.date,
            content: activitie.content,

        }

        const realm = await getRealm();

        realm.write(() => {
            realm.create('ActivitiesSchema', data);
        });
        navigation.goBack();

    }
    /*
        useEffect(() => {
            async function loadActivities() {
                const realm = await getRealm();
        
                const data = realm.objects('ActivitiesSchema');
        
                this.state.activities = data;
            }
            loadActivities();
        
        
        }, []);    
    */


    return (
        <View style={styles.backgroundApp}>
            <View style={styles.headerStyle}>
                <TouchableOpacity onPress={() => navigation.goBack()}>

                    <Image source={require('../icons/Flecha.png')} style={styles.returnButton} />

                </TouchableOpacity>
                <Image source={require('../icons/icones/Activities.png')} style={{
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
                flex: 5, flexDirection: 'column', alignItems: 'center',
            }}>
                <KeyboardAvoidingView style={{ height: '30%', width: '80%' }} behavior={'padding'}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 25, color: 'white', width: '80%', height: '25%' }}>Disciplina</Text>
                        <View style={{ width: '100%', backgroundColor: 'white', height: '40%', borderRadius: 10 }}>

                            <TextInput style={{ flex: 1, fontWeight: 'bold', fontSize: 15 }}
                                autoCapitalize={'characters'} scrollEnabled={false} maxLength={32}
                                onChangeText={(title) => this.onchangeTitle(title)}
                            />

                        </View>
                    </View>
                </KeyboardAvoidingView>


                <KeyboardAvoidingView style={{ height: '30%', width: '80%', }} behavior={'height'}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 25, color: 'white', width: '80%', height: '25%' }}>Data de entrega</Text>
                        <View style={{ width: '100%', backgroundColor: 'white', height: '40%', borderRadius: 10 }}>
                            <TextInput style={{ flex: 1, fontSize: 15 }} value={this.state.date}
                                scrollEnabled={false} maxLength={10} keyboardType='numeric'
                                onChangeText={(date) => this.onchangeDate(date)} />
                        </View>
                    </View>
                </KeyboardAvoidingView>


                <KeyboardAvoidingView style={{ height: '30%', width: '80%' }} behavior={'padding'}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 25, color: 'white', width: '80%', height: '25%' }}>Atividade</Text>
                        <View style={{ width: '100%', backgroundColor: 'white', height: '80%', borderRadius: 10 }}>

                            <TextInput style={{ flex: 1, fontWeight: 'normal', fontSize: 15 }}
                                multiline={true}
                                scrollEnabled={true} maxLength={400}
                                onChangeText={(content) => this.onchangeContent(content)}
                            />

                        </View>
                    </View>
                </KeyboardAvoidingView>


            </View>

            <View style={{ flex: 1, flexDirection: 'row-reverse', width: '100%' }}>

                <TouchableOpacity onPress={() => saveActivitie(toBeSaved, navigation)} style={{ paddingTop: '3%', paddingBottom: '3%', paddingRight: '3%' }}>

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







export default AddActivitie;