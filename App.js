import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Navigation1 from './src/navigation1';
import { Provider } from 'react-redux';
import {store} from './src/store';
 
export default function App() {
  return (
    <Provider store={store}> 
       <Navigation1/>        
      <StatusBar style="auto" />
     </Provider>
  );
}