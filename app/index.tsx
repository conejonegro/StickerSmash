import { Text, View, StyleSheet } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.text}
      >
        Porque diablos la version web no funciona?.
      </Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
