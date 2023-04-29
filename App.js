import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style='auto' />
    </Provider>
  );
}
