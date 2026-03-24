import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router'
import { Image } from "expo-image";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen. Welcome to this App</Text>
      <Link href={"/about"}>This is the About Screen</Link>
      <Link href={"/contact"}>This is the Contact Screen</Link>
      <Image source={require("@/assets/images/icon.png")}
      style={{ width: 200, height: 200, borderRadius: 20}}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'blue'
  },
});
