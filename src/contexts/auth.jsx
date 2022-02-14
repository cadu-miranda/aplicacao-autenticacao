import React, { createContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import signIn from "../services/auth";
import api from "../services/api";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const navigation = useNavigation();

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStoragedData = async () => {
      try {
        const storagedUser = await AsyncStorage.getItem("@Auth:user");
        const storagedToken = await AsyncStorage.getItem("@Auth:token");

        await new Promise((resolve) => setTimeout(resolve, 3500));

        if (storagedUser && storagedToken) {
          api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
          setUser(JSON.parse(storagedUser));
        }

        setIsLoading(false);
      } catch (e) {
        console.log(e);

        setIsLoading(false);
      }
    };

    loadStoragedData();
  }, []);

  const Login = async () => {
    try {
      setIsLoading(true);

      const userData = {
        email,
        password,
      };

      const response = await signIn(userData.email, userData.password);

      console.log(response);

      setUser(response.data.user);
      setIsLoading(false);

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      await AsyncStorage.setItem(
        "@Auth:user",
        JSON.stringify(response.data.user)
      );

      await AsyncStorage.setItem("@Auth:token", response.data.token);

      if (response.status === 200) {
        setEmail("");
        setPassword("");

        if (response.data.user.userType === 999) navigation.navigate("Home");
        else if (response.data.user.userType === 1)
          navigation.navigate("Users");
      } else alert("Usuário não encontrado!");
    } catch (e) {
      console.log(e);

      setIsLoading(false);
      navigation.navigate("Login");

      alert("Erro ao efetuar login na aplicação!");
    }
  };

  const Logout = () => {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });

    navigation.navigate("Login");
    alert("Usuário desconectado com sucesso!");
  };

  if (isLoading) {
    return (
      <LottieView
        source={require("../../assets/lotties/bear.json")}
        autoPlay
        loop
        style={{ backgroundColor: "#333" }}
      />
    );
  }

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(user),
        user,
        setEmail,
        email,
        setPassword,
        password,
        Login,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
