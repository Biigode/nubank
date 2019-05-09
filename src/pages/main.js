/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../components/header";
import Tabs from "../components/tabs";
import Card from "../components/card";

export default function Main() {
  return (
    <View style={styles.container}>
      <Header />
      <Card style={styles.card} />

      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8B10AE"
  },
  card: {
    marginRight: 5,
    marginLeft: 5,
    padding: 30
  }
});
