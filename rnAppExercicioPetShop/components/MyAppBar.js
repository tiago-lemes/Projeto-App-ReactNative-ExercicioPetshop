import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const MyAppBar = () => (
  <Appbar style={styles.bottom}>
    <Appbar.Action icon="archive" onPress={() => console.log("Pressed archive")} />
    <Appbar.Action icon="mail" onPress={() => console.log("Pressed mail")} />
    <Appbar.Action icon="label" onPress={() => console.log("Pressed label")} />
    <Appbar.Action icon="delete" onPress={() => console.log("Pressed delete")} />
  </Appbar>
);

export default MyAppBar;

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
