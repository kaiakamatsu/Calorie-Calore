import { StyleSheet, Text, View, Modal, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import {colors} from '../components/colors';
import { ButtonOptions } from "../components/ButtonOptions";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { format } from "date-fns";

export default function PlanScreen({navigation, route}) {

  const [modalVisible, setModalVisible] = useState(false);
  const [datetext, setdatetext] = useState("no date");

  const handleModal = (response) => {
    events = "";
    console.log(response);
    setModalVisible(!modalVisible);
    const update = response.month + " - " + response.day + " - " + response.year;
    setdatetext(update);
    getApps(response.dateString);
    console.log(datetext);
  };

    return(
        <View style = {styles.background}>
          <View style = {styles.calendarcontainer}>
            <CalendarList
              pastScrollRange={6}
              futureScrollRange={18}
              onDayPress = {(response) => handleModal(response)}
              minDate = {Format (min)}
              markedDates = {getMarkedDates(now, appointments)}
              theme = {{
                calendarBackground: colors['color-tan'],
                selectedDayBackgroundColor: colors['color-red'],

                dotColor: colors['color-red'],
                dayTextColor: "black",
                textDisabledColor: "white",

                monthTextColor: "black",
                textSectionTitleColor: "black",
                textMonthFontWeight: "bold",
                arrowColor: colors['color-red'],
              }}
            />
            <Modal 
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.modalView}>
                <Text style={styles.agenda}>MEAL PLAN {datetext}</Text>
                <Text style={styles.event}>{events} </Text>
                <Text style={styles.totals}>{totals}</Text>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.hide}>HIDE</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
          <ButtonOptions buttoncontainer = {styles.bcontainer} ID = {route.params.id}/>
        </View>
    );
};

const now = new Date();

const min = new Date (2022, 11, 1);

const Format = (date = new Date()) => format(date, "yyyy-MM-dd");

let events = null;

let totals = null;

let tcal = 0;

let tcarbs = 0; 

let tprotein = 0;

let tfat = 0;

const getApps = (datetext) => {
  console.log(datetext);
  let apps = appointments.filter(day => day.date.includes(datetext));
  console.log(apps);
  tcal = 0;
  tcarbs = 0; 
  tprotein = 0;
  tfat = 0;
  for (let i = 0; i < apps.length; i++){
      events = events + apps[i].title + "\n" + "calories: " + apps[i].calories + "\n" + "carbs: " + apps[i].carb + "g" + "\n" + "protein: " + apps[i].protein + "g" + "\n" + "fat: " + apps[i].fat + "g" + "\n" + "\n";
      tcal = tcal + apps[i].calories
      tcarbs = tcarbs + apps[i].carb
      tprotein = tprotein + apps[i].protein
      tfat = tfat + apps[i].fat
  }
  totals = "TOTALS: " + "\n" + tcal + " calories, " + "\n" + tcarbs + "g carbs ," + "\n" + tprotein + "g protein, " + "\n" + tfat + "g fat"
  console.log(events);
  return events;
}

const appointments = [
  {
    date: "2023-01-21T12:30:00-07:00",
    title: "Smoky Bacon Cheddar Breakfast Hash",
    calories: 600,
    carb: 35,
    protein: 40,
    fat: 30,
  },
  {
    date: "2023-01-21T12:30:00-07:00",
    title: "Chicken Breast and Rice",
    calories: 700,
    carb: 50,
    protein: 60,
    fat: 10,
  },
  {
    date: "2023-01-21T12:30:00-07:00",
    title: "Chicken Alfredo Pasta",
    calories: 1100,
    carb: 70,
    protein: 45,
    fat: 80,
  },
  {
    date: "2023-01-22T12:30:00-07:00",
    title: "Sausage Breakfast Burrito",
    calories: 657,
    carb: 72,
    protein: 29,
    fat: 28,
  },
  {
    date: "2023-01-22T12:30:00-07:00",
    title: "Steak, Rice, and Roasted Veggies",
    calories: 520,
    carb: 39,
    protein: 34,
    fat: 13,
  },
  {
    date: "2023-01-22T12:30:00-07:00",
    title: "Oyakodon",
    calories: 762,
    carb: 108,
    protein: 46,
    fat: 15,
  },
]; //after integrating with backend, this would come from the firebase db 

const getMarkedDates = (today, events = []) => {
  const markedDates = {};

  markedDates[Format(today)] = {selected: true};

  events.forEach(ev => {
    const formattedDate = Format(new Date(ev.date));
    markedDates[formattedDate] = {
      ...markedDates[formattedDate],
      marked: true,
    }
  })

  return markedDates;
};

const styles = StyleSheet.create({
  totals:{
    fontWeight: "bold",
    fontSize: 15,
    top: 30,
    color: '#7D3C98',
  },
  bcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    bottom: 40,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    justifyContent: "center",
  },
  calendarcontainer:{ 
    bottom: 50,
  },
  modalView: {
    height: 600,
    top: 100,
    margin: 20,
    backgroundColor: colors['color-tan'],
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    position: "absolute",
    bottom: 10,
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    borderColor: colors['color-red'],
  },
  hide: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: '#515A5A',
  },
  agenda: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: '#515A5A',
    fontSize: 20,
    right: 50,
  },
  event: {
    fontWeight: "bold",
    fontSize: 15,
    top: 30,
  }
});