import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, StyleSheet, TextInput, Image } from "react-native";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import Icon from "react-native-vector-icons/Ionicons";

export default function Login() {
  const navigation = useNavigation();

  const { setEmail, email, setPassword, password, Login } = useAuth();

  const [togglePasswordVisibility, setTogglePasswordVisibility] =
    useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        resizeMode="center"
        style={{ maxHeight: 180, maxWidth: 350 }}
      />
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        placeholderTextColor="#fff"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#fff"
        secureTextEntry={togglePasswordVisibility ? true : false}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      {togglePasswordVisibility ? (
        <Icon
          onPress={() => setTogglePasswordVisibility(!togglePasswordVisibility)}
          name="ios-eye-off-outline"
          size={30}
          color="#fff"
          style={{ position: "relative", bottom: 57, left: 125 }}
        />
      ) : (
        <Icon
          onPress={() => setTogglePasswordVisibility(!togglePasswordVisibility)}
          name="eye-outline"
          size={30}
          color="#fff"
          style={{ position: "relative", bottom: 57, left: 125 }}
        />
      )}
      <Button
        buttonText="Entrar"
        onPress={() => {
          if (email && password) Login();
        }}
      />
      <Text style={{ color: "#fff", fontSize: 16, marginTop: 34 }}>
        Ainda não possui uma conta?{" "}
        <Text
          onPress={() => navigation.navigate("Cadastro")}
          style={{
            color: "#d72141",
            fontSize: 16,
          }}
        >
          Cadastre-se
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
  },

  mainText: {
    fontSize: 24,
    color: "#fff",
  },

  label: {
    width: "100%",
    color: "#fff",
    fontSize: 18,
    marginLeft: 60,
    marginVertical: 8,
  },

  input: {
    width: "85%",
    height: 60,
    margin: 12,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 18,
    color: "#fff",
    borderColor: "#fff",
    borderRadius: 8,
  },
});
