import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AgendaList, Agenda, Calendar, CalendarContext, CalendarList, CalendarProvider, ExpandableCalendar, LocaleConfig, WeekCalendar } from 'react-native-calendars';
import React, { useState } from 'react';



export default function App() {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <Text>December</Text> 
      {/* Find a way to automate the month? */}
      {/* <Calendar       //Basic calendar - shows Month and year with respective dates and arrows to switch months
        onDayPress={day => {
          setSelected(day.dateString);
          console.log('selected day', day) */}

      {/* <CalendarList   //Scrollable list with months and days
        onDayPress={day => {
          setSelected(day.dateString);
          console.log('selected day', day)
        }} */}

      {/* Have to automate dates */}
      <CalendarProvider date={'2023-12-08'} >
        <WeekCalendar

          onDayPress={day => {
            setSelected(day.dateString);
            console.log('selected day', day)
          }}
          // No period under dates - Michelle

          // Green is happy, red is angry, yellow is meh, sad is light blue, excited gold
          markedDates={{
            //find ways to automate days with adjacent colors
            '2023-12-07': { selected: true, disableTouchEvent: true, selectedColor: "lightgreen", textColor:"black"}, //happy
            '2023-12-08': { selected: true, disableTouchEvent: true, selectedColor: "#FF7171" },                      //angry
            '2023-12-09': { selected: true, disableTouchEvent: true, selectedColor: "yellow" },                       //meh
            '2023-12-05': { selected: true, disableTouchEvent: true, selectedColor: "lightblue" },                    //sad
            '2023-12-06': { selected: true, disableTouchEvent: true, selectedColor: "gold" }                          //excited
          }}

          theme={{
            calendarBackground: "#FEF3E7",      //decided background color - Michelle
            textSectionTitleColor: "black",     //Days of week color (Sun,Mon,Tues,Wed, etc)
            // selectedDayBackgroundColor: "red", //background color of selected date
            selectedDayTextColor: "black",    //background text color fo selected date
            todayTextColor: "blue",           //todays date text color
            dayTextColor: "black",         //Number'd text color (1,2,3,4..., 31)
            textDisabledColor: "black"      //set prev month's dates, and future month's date's color. (Today is Dec 7th, so Jan 1st's week text color)
          }} />

      </CalendarProvider>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
