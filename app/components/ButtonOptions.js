import { useNavigation } from '@react-navigation/native';
import {View, Text, TouchableOpacity, Button, StyleSheet, Image} from 'react-native';

export const ButtonOptions = (props) => {
  
    return (
        <View style = {props.buttoncontainer}>
            <PlanButton iden = {props.ID} camerastyle = {styles.camerabutton}/>
            <CalcButton iden = {props.ID} calcstyle = {styles.calcbutton}/>
            <HomeButton iden = {props.ID} homestyle = {styles.homebutton}/>
            <HealthButton iden = {props.ID} healthystyle = {styles.healthybutton}/>
            <SettingsButton iden = {props.ID} settingsstyle = {styles.settingsbutton}/>
        </View>
    );
  }

  const styles = StyleSheet.create({
  homebutton: {
    width: 40,
    height: 40,
  },
  camerabutton: {
    width: 50,
    height: 50,
  },
  calcbutton: {
    width: 35,
    height: 30,
  },
  healthybutton: {
    width: 35,
    height: 35,
  },
  settingsbutton:{
    width: 35,
    height: 35,
  },
});

const HomeButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Home", {id: props.iden})}>
            <Image 
            style = {props.homestyle}
            source = {require("C:/Users/kaiak/Tracker/app/assets/home.png")}
            />
        </TouchableOpacity>
    );
  }

const PlanButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Plan", {id: props.iden})}>
            <Image 
            style = {props.camerastyle}
            source = {require("C:/Users/kaiak/Tracker/app/assets/plan.png")}
            />
        </TouchableOpacity>
    );
  }

const CalcButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Calc", {id: props.iden})}>
            <Image 
            style = {props.calcstyle}
            source = {require("C:/Users/kaiak/Tracker/app/assets/calc.png")}
            />
        </TouchableOpacity>
    );
  }

const HealthButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Health", {id: props.iden})}>
            <Image 
            style = {props.healthystyle}
            source = {require("C:/Users/kaiak/Tracker/app/assets/health.png")}
            />
        </TouchableOpacity>
    );
  }

const SettingsButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Settings", {id: props.iden})}>
            <Image 
            style = {props.settingsstyle}
            source = {require("C:/Users/kaiak/Tracker/app/assets/setting.png")}
            />
        </TouchableOpacity>
    );
  }