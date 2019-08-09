import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
	Image,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'br';

const Calendario = ({navigation}) => (
  <View style={styles.backgroundApp}>
		<View style={styles.headerStyle}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../icons/Flecha.png')} style={styles.returnButton}/>
      </TouchableOpacity>
			<Image source={require('../icons/icones/Calendario.png')} style={{resizeMode: 'center', flex: 2}}/>           
			<TouchableOpacity>
        <Image source={require('../icons/Opções.png')} style={{resizeMode: 'center', tintColor: 'white', marginRight: 15, marginTop: 5, flex: 1}} />
			</TouchableOpacity>
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
        onDayPress={(day) => (alert('Pressed ',day))}
        onDayLongPress={(day) => (alert('Pressed Long ',day))}

        // Estilização do calendario
        style={{
          borderWidth: 3,
          borderColor: 'white',
          display: 'flex',
          shadowColor: 'black',
          alignSelf: 'center',
          borderStyle: 'dashed',
          borderRadius: 15,
          width: 300,
        }}
        theme={{
          arrowColor: 'white',
          textSectionTitleColor: 'white',
          calendarBackground: '#55b15e',
          selectedDayBackgroundColor: 'white',
          selectedDayTextColor: 'black',
          dayTextColor: 'white',
          todayTextColor: 'black',
          monthTextColor: 'white',
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
      />
    </View>
    <View style={{ flex: 1, flexDirection:'row-reverse', margin: 20 }}>
      <TouchableOpacity>
        <Image source={require('../icons/Add.png')} style={{resizeMode: 'center', width: 75, height: 75,}} />
      </TouchableOpacity>
    </View>
  </View>
);

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
});

export default Calendario;
