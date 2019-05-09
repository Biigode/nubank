import React from "react";

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Tabs() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <TouchableOpacity style={styles.button}>
          <Icon name="person-add" size={24} color="#FFF" />
          <Text style={styles.text}>Indicar</Text>
          <Text style={styles.text}>Amigos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <Text style={styles.text}>Cobrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <Text style={styles.text}>Depositar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <Text style={styles.text}>Transferir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="lock" size={24} color="#FFF" />
          <Text style={styles.text}>Bloquear</Text>
          <Text style={styles.text}>cartão</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 30,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    height: 110,
    width: 110
  },
  text: {
    flex: 1,
    color: "#FFF",
    flexWrap: "wrap"
  }
});
