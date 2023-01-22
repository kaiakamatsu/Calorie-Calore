import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal} from "react-native";
import {colors} from '../components/colors';
import React, { useState } from "react";
import { ButtonOptions } from "../components/ButtonOptions";
import { format } from "date-fns";

export default function HealthyScreen({navigation, route}) {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setname] = useState("");
  const [object, setobject] = useState(placeholder);

  const showDisease = (name) => {
    setname(name);
    getInfo(name);
    setModalVisible(!modalVisible);
  };

  const getInfo = (name) => {
    setobject(diseases.find(element => element.disease==name));
    console.log(object);
}

  const renderItem = ({ item }) => (
    <View style = {styles.item}>
      <TouchableOpacity
      onPress={() => showDisease(item.disease)}
      >
        <Text style = {styles.disease}>{item.disease}</Text>
      </TouchableOpacity>
    </View>
  );

    return(
        <View style = {styles.background}>
            <Text style = {styles.title}>Specific Recommendations</Text>
            <View style = {styles.listcontainer}>
              <FlatList
              data={diseases}
              renderItem={renderItem}
              />
            </View>
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
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.cases}>CASES: {object.cases}</Text>
                <Text style={styles.advice}>ADVICE: {object.advice}</Text>
                <Text style={styles.reason}>WHY?  {object.reason}</Text>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.hide}>HIDE</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <ButtonOptions buttoncontainer = {styles.bcontainer} ID = {route.params.id}/>
        </View>
    );
};

const now = new Date();

const today = format(now, "MM/dd/yyyy");

const placeholder = {
    disease: null,
    cases: null,
    advice: null,
    reason: null,
}

const diseases = [
  {
    disease: "Type 2 Diabetes",
    cases: "200k",
    advice: "Of your calories," + "\n" + "50-60% Carbs" + "\n" + "25-35% Fat" + "\n" + "15-20% Protein",
    reason: "It is best to monitor carbohydrate intake because a diabetic's body has difficulty processing glucose.",
  },
  {
    disease: "Chronic Kidney Disease",
    cases: "200k",
    advice: "Add extra calories to your diet through healthy carbs or a shake!",
    reason: "CKD often requires dialysis, a procedure which removes nutrients from the blood. Therefore, patients must increase their typical calorie intake.",
  },
  {
    disease: "Coronary Artery Disease",
    cases: "3 million",
    advice: "Maintain average macronutrient split but cut back on bad cholesterol such as fried foods and processed meats!",
    reason: "CAD results from plaque building up in the arteries. LDL cholesterol can contribute to this plaque build-up and thus its best to avoid unhealthy fats.",
  },
  {
    disease: "Congestive Heart Failure",
    cases: "200k",
    advice: "Maintain average macronutrient split but reduce the amount of sodium and fluids!",
    reason: "People with CHF cannot pump blood around the body adequately. Eating a higher content of salt or drinking more fluids may increase the pressure and strain on the heart.",
  },
];


const styles = StyleSheet.create({
  bcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: 65,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  advice:{
    top: 100,
    color: '#7D3C98',
    fontWeight: "bold",
    fontSize: 25,
  },
  reason:{
    top: 180,
    color: '#0B5345',
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
  },
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    justifyContent: "center",
  },
  title: {
    bottom: 0,
    left: 20,
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "black",
  },
  date:{
    fontWeight: "bold",
    bottom: 0,
    left: 20,
    fontSize: 20,
    color: "black",
    fontStyle: "italic",
  },
  disease: {
    color: '#616A6B',
    fontWeight: "bold",
    fontSize: 25,
  }, 
  length: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  cases: {
    top: 25,
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  item:{
    backgroundColor: "white",
    padding: 20,
    borderBottomWidth: 10,
    borderBottomColor: colors['color-tan'],
  },
  listcontainer:{
    height: 650,
    width: 375,
    left: 20,
    top: 40,
    borderColor: '#7D3C98',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    borderStyle: 'dotted',
  },
  modalView: {
    height: 685,
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
    color: colors['color-red'],
  },
  task: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors['color-red'],
    fontSize: 30,
  },
  method: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
  name:{
    color: '#0B5345',
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 25,
  }
});