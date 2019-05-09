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
      <View style={styles.cardCoins}>
        <Icon1 name="coins" size={35} color="#666" />
        <Icon
          name="visibility-off"
          size={35}
          color="#666"
          style={{ marginLeft: 250 }}
        />
      </View>
      <View style={styles.cardGrana}>
        <Text>Saldo disponivel</Text>
        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <Icon name="attach-money" size={35} color="#666" />
          <Text style={styles.textSaldoDisponivel}>10.000.000,00</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 12, marginLeft: 12 }}>
        <Icon2
          name="creditcard"
          size={35}
          color="#666"
          style={{ marginRight: 5 }}
        />
        <Text style={{ flexWrap: "wrap" }}>
          Ultima transferencia de R$:100.000,00 de Lucas batata
        </Text>
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
  cardCoins: {
    marginBottom: 25,
    flexDirection: "row",
    margin: 12,
    marginTop: 15
  },
  iconVisibility: {
    marginLeft: 100
  },
  cardGrana: {
    flex: 1,
    margin: 12,
    marginTop: 75
  },
  textSaldoDisponivel: {
    fontSize: 30,
    color: "#666"
  }
});
