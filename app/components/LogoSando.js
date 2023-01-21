import {Image} from 'react-native';

export const LogoSando = (props) => {
    return (
        <Image 
        source = {require('C:/Users/kaiak/Tracker/app/assets/logosando.png')}
        style = {props.style}
        />
    );
}