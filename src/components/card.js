import React, { Component } from "react";

import { View, StyleSheet, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/AntDesign";
// import { Container } from './styles';

export default function() {
  return (
    <View style={styles.container}>
      {/* <ScrollView horizontal={true}> */}
      <View>
        <Icon1 name="coins" size={24} color="#666" />
      </View>
      <View style={styles.cardGrana}>
        <Text>Saldo disponivel: 1.000.000,000</Text>
        <Icon name="attach-money" size={24} color="#666" />
      </View>
      <View>
        <Icon2 name="creditcard" size={24} color="#666" />
      </View>
      {/* </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 425,
    width: 350,
    borderRadius: 5
  },
  cardGrana: { flexDirection: "row", flex: 1 }
});
