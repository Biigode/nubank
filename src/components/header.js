import React from "react";

import { View, StyleSheet, Text } from "react-native";

// import { Container } from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text>victor</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 40,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 30
  }
});
