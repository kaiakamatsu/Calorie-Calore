import {Image} from 'react-native';

export const Logo = (props) => {
    return (
        <Image 
        source = {require('C:/Users/kaiak/Tracker/app/assets/Logo.png')}
        style = {props.style}
        />
    );
}