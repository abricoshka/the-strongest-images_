import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import CardsList from './src/components/CardsList';

export default function App() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>The Strongest Images</Text>
          <Text style={styles.description}>Мирон Edition</Text>
          <CardsList />
          <StatusBar style="light" />
        </SafeAreaView>
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    textAlign: "center",
    marginTop: 50,
    margin: 7,
    fontSize: 26,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    color: "gray"
  }
});