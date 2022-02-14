import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ buttonText, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.mainText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 24,
    color: "#fff",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d72141",
    width: "85%",
    height: 60,
    borderRadius: 8,
    marginTop: 14,
  },
});
