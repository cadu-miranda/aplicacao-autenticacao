import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        buttonText="Voltar"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    flex: 1,
  },
});
