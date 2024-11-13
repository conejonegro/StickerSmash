import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Index() {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://cineclub-forever.web.app/' }} 
        style={styles.webview} 
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 16,
  },
  webview: {
    flex: 1,
  },
});
