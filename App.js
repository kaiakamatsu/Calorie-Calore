import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyStack from './app/screens/Stack';


export default function App() {
  return (
    <SafeAreaProvider>
      <MyStack/>
    </SafeAreaProvider>
  );
};
