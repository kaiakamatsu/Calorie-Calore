import { useNavigation } from '@react-navigation/native';
import {View, Text, TouchableOpacity, Button, StyleSheet, Image} from 'react-native';

export const ButtonOptions = (props) => {
  
    return (
        <View style = {props.buttoncontainer}>
            <CameraButton iden = {props.ID} camerastyle = {styles.camerabutton}/>
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
    width: 40,
    height: 40,
  },
  calcbutton: {
    width: 40,
    height: 40,
  },
  healthybutton: {
    width: 40,
    height: 40,
  },
  settingsbutton:{
    width: 40,
    height: 40,
  },
});

const HomeButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Home", {id: props.iden})}>
            <Text>home</Text>
            <Image 
            style = {props.homestyle}
            //source = {require("C:/Users/kaiak/ComeBackSzn/app/assets/home.png")}
            />
        </TouchableOpacity>
    );
  }

const CameraButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Camera", {id: props.iden})}>
            <Text>cam</Text>
            <Image 
            style = {props.camerastyle}
            //source = {require("C:/Users/kaiak/ComeBackSzn/app/assets/camera.png")}
            />
        </TouchableOpacity>
    );
  }

const CalcButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Calc", {id: props.iden})}>
          <Text>calc</Text>
            <Image 
            style = {props.calcstyle}
            //source = {require("C:/Users/kaiak/ComeBackSzn/app/assets/calc.png")}
            />
        </TouchableOpacity>
    );
  }

const HealthButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Health", {id: props.iden})}>
            <Text>health</Text>
            <Image 
            style = {props.healthystyle}
            //source = {require("C:/Users/kaiak/ComeBackSzn/app/assets/healthy.png")}
            />
        </TouchableOpacity>
    );
  }

const SettingsButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity 
        onPress = {()=> navigation.navigate("Settings", {id: props.iden})}>
            <Text>settings</Text>
            <Image 
            style = {props.settingsstyle}
            //source = {require("C:/Users/kaiak/ComeBackSzn/app/assets/settings.png")}
            />
        </TouchableOpacity>
    );
  }