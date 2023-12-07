import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AgendaList, Agenda, Calendar, CalendarContext, CalendarList, CalendarProvider, ExpandableCalendar, LocaleConfig } from 'react-native-calendars';
import React, { useState } from 'react';



export default function App() {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>

      {/* <Calendar       //Basic calendar - shows Month and year with respective dates and arrows to switch months
        onDayPress={day => {
          setSelected(day.dateString);
          console.log('selected day', day) */}

      {/* <CalendarList   //Scrollable list with months and days
        onDayPress={day => {
          setSelected(day.dateString);
          console.log('selected day', day)
        }} */}

      <Calendar

        onDayPress={day => {
          setSelected(day.dateString);
          console.log('selected day', day)
        }}

        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true }
        }}

        theme={{
          calendarBackground: "gold",
          textSectionTitleColor: "blue",     //Days of week color (Sun,Mon,Tues,Wed, etc)
          selectedDayBackgroundColor: "red", //background color of selected date
          selectedDayTextColor: "white",    //background text color fo selected date
          todayTextColor: "blue",           //todays date text color
          dayTextColor: "black",         //Number'd text color (1,2,3,4..., 31)
          textDisabledColor: "white"      //set prev month's dates, and future month's date's color. (Today is Dec 7th, so Jan 1st's week text color)
        }} />


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
