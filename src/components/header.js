import React from "react";

import { View, StyleSheet, Text, Image } from "react-native";
import logo from "../assets/Nubank_Logo.png";
import Icon from "react-native-vector-icons/MaterialIcons";

// import { Container } from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.nuView}>
        <Image source={logo} />
        <Text style={styles.nuText}>victor</Text>
      </View>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 40,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 30
  },
  nuView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  nuText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 8
  }
});
