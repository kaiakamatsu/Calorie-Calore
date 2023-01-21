import { useNavigation } from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';

export const BackButton = (props) => {

    const navigation = useNavigation();
  
    return (
        <TouchableOpacity style= {props.backstyle} 
        onPress = {()=> navigation.goBack()}>
            <Text style = {props.backtextstyle}>
                BACK
            </Text>
        </TouchableOpacity>
    );
  }