import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from './SettingsScreen';
import HealthyScreen from './HealthScreen';
import CalcScreen from './CalcScreen';
import PlanScreen from './PlanScreen';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login"
          component={LogInScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Signup"
          component={SignUpScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Home"
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Settings"
          component={SettingsScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Health"
          component={HealthyScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Calc"
          component={CalcScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Plan"
          component={PlanScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};