import { StyleSheet, Text, View} from "react-native";
import {colors} from '../components/colors';
import { ButtonOptions } from "../components/ButtonOptions";
import {React}  from 'react';
//import Clock from '../components/Clock';
import {LogoVert} from '../components/LogoVert';


export default function HomeScreen({navigation, route}) {
    return(
        <View style = {styles.background}>
            <LogoVert style={styles.logo}/>
            <Text style = {styles.userid}>welcome, {route.params.id}</Text>
            <Text style = {styles.quote}>"healthy body,</Text>
            <Text style = {styles.quote2}>healthy mind"</Text>
            <ButtonOptions buttoncontainer = {styles.bcontainer} ID = {route.params.id}/>
        </View>
    );
};

const styles = StyleSheet.create({
  bcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: 230,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    justifyContent: "center",
  },
  userid: {
    fontWeight: "bold",
    bottom: 450,
    left: 35,
    fontSize: 20,
    fontStyle: "italic",
    color: colors['color-text'],
  },
  quote: {
    fontWeight: "bold",
    left: 100,
    fontSize: 30,
    color: colors['color-text'],
  },
  quote2: {
    fontWeight: "bold",
    left: 115,
    fontSize: 30,
    color: colors['color-text'],
  },
  logo: {
    left: 90,
    width: 230, 
    height: 300,
    bottom: 20
  },
});