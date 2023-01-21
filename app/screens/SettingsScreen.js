import { StyleSheet, Text, View, Button} from "react-native";
import {colors} from '../components/colors';
import { ButtonOptions } from "../components/ButtonOptions";
import {auth, db} from '../backend/firebase';
import {signOut} from 'firebase/auth';

export default function SettingsScreen({navigation, route}) {
    return(
        <View style = {styles.background}>
            <LogOutButton logoutstyle = {styles.logoutcontainer} nav = {navigation}/>
            <ButtonOptions buttoncontainer = {styles.bcontainer} ID = {route.params.id}/>
        </View>
    );
};

const styles = StyleSheet.create({
  bcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: 382,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    justifyContent: "center",
  },
  logoutcontainer:{
    borderColor: colors['color-red'],
    borderTopWidth: 2,
    borderBottomWidth: 2,
  }
});

const LogOutButton = (props) => {
  return (
    <View style = {props.logoutstyle}>
      <Button 
      title = "LOGOUT"
      color = {colors['color-red']}
      onPress = {() => LogOutHandler(props.nav)}>
      </Button>
    </View>
  );
}

function LogOutHandler (navigation) {
  signOut(auth);
  navigation.navigate("Login")
}