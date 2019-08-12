import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import getRealm from '../../services/realm';

LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'br';

state = {
  markedDays: [],
}

const Calendario = ({navigation}) => {
  useEffect(() => {
    async function loadMarkedDays() {
      const realm = await getRealm();
  
      const data = realm.objects('MarkedDaysSchema');
  
      this.state.markedDays = data;
    }
    loadMarkedDays();
  }, []);


  const markedDaysObj = {}
  for (i=0; i!=this.state.markedDays.length; i++){
    markedDaysObj[this.state.markedDays[i].date] = {marked:true, selected: true}
  }
  // const c = '2019-08-02';
  // const test = { '2019-08-01': {marked: true, selected: true}}
  // //const test = Object.assign(dayM);

  // test[c] = {marked: true, selected: true}

  function find(date){
    const dayToBeMarked = createDayToBeMarked(date);
    for (i=0;i!=this.state.markedDays.length;i++){
      if (this.state.markedDays[i].date == dayToBeMarked){
        Alert.alert(this.state.markedDays[i].title, this.state.markedDays[i].content);
        break;
      } 
    }
  }
  function createDayToBeMarked(currentDate){
    var currentDay = currentDate.day < 10 ? '0'+currentDate.day : currentDate.day+'';
    var currentMonth = currentDate.month < 10 ? '0'+currentDate.month : currentDate.day+'';
    var dayToBeMarked = currentDate.year+'-'+currentMonth+'-'+currentDay;
    return dayToBeMarked;
}
return(
  <View style={styles.backgroundApp}>
		<View style={styles.headerStyle}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../icons/Flecha.png')} style={styles.returnButton}/>
      </TouchableOpacity>
      <Image source={require('../icons/icones/Calendario.png')} style={{resizeMode: 'center',
      flex: 2, marginRight: '10%'}}/>           

		</View>
    <View style={{flex: 1}}/>
    <View style={{flex: 5, alignItems: 'center', alignSelf: 'center', alignContent: 'center'}}>
      <Calendar
        // https://github.com/wix/react-native-calendars - Docs Oficial!
        // minDate={'2019-08-11'} // Data minina - Apresentação do codigo
        onPressArrowLeft={substractMonth => substractMonth()} // Mudança do mês nas Setas - Mês Anterior
        onPressArrowRight={addMonth => addMonth()} // Mudança do mês nas Setas - Mês Posterior
        monthFormat={'MMM yyyy'} // Modelo de como será o comportamento no calendário, sendo Ex: "Jan 2019". Site: http://arshaw.com/xdate/#Formatting
        firstDay = { 1 } // Dia começar na Segunda
        
        // Funcionalidades dos botões (Apertar) e (Pressionar)
        onDayPress={(date) => find(date)}
        onDayLongPress={(date) => navigation.navigate('AddDayScreen', {
          daySaved: date
        })}

        // Estilização do calendario
        style={{
          marginTop: 1,
          borderWidth: 3,
          borderColor: '#55b15e',
          display: 'flex',
          shadowColor: 'black',
          alignSelf: 'center',
          borderStyle: 'solid',
          borderRadius: 12,
          width: 380,
          height: 400,
        }}
        theme={{
          arrowColor: 'black',
          textSectionTitleColor: '#55b15e',
          calendarBackground: 'white',
          selectedDayBackgroundColor: 'white',
          selectedDayTextColor: '#55b15e',
          dayTextColor: 'black',
          todayTextColor: 'red',
          monthTextColor: 'black',
          textDisabledColor: 'grey',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      markedDates={markedDaysObj}/>
    </View>
    <View style={{ flex: 1, flexDirection:'row-reverse', margin: 20 }}>
    </View>
  </View>
);
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
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Calendario;
