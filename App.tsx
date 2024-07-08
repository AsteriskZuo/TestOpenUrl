import "expo-dev-client";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Test1 } from "./src/Test";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          Test1();
        }}
      >
        <Text>{"Test1"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "lightblue",
    justifyContent: 'center',
    alignItems: 'center',
  }
});
