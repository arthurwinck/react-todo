
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Todo App</Text>
    </View>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Estudando React</Text>
      <Text style={styles.sectionDescription}>Lorem ipsum dolot semet...</Text>
    </View>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Estudando React</Text>
      <Text style={styles.sectionDescription}>Lorem ipsum dolot semet...</Text>
    </View>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Estudando React</Text>
      <Text style={styles.sectionDescription}>Lorem ipsum dolot semet...</Text>
    </View>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Estudando React</Text>
      <Text style={styles.sectionDescription}>Lorem ipsum dolot semet...</Text>
    </View>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Estudando React</Text>
      <Text style={styles.sectionDescription}>Lorem ipsum dolot semet...</Text>
    </View>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Estudando React</Text>
      <Text style={styles.sectionDescription}>Lorem ipsum dolot semet...</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#e6e6e6',
    flex: 1
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#333',
  },
  sectionHeader: {
    backgroundColor: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 5
  },
  sectionContainer: {
    marginTop: 32,
    marginHorizontal: 20,

    paddingTop: 20,
    paddingHorizontal: 24,
    paddingBottom: 10,

    borderRadius: 10,
    backgroundColor: 'grey',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#e6e6e6',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
