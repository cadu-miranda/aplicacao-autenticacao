import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../components/Button";

export default function Home() {
  const { user, Logout } = useAuth();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainText}>Olá, {user.name}!</Text>
        <Button buttonText="Sair" onPress={Logout} />
      </View>
    </>
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

  mainText: {
    fontSize: 24,
    color: "#fff",
  },
});
