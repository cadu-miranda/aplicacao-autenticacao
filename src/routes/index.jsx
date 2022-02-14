import React from "react";
import { SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import Users from "../screens/Users";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#333" }}>
      <Stack.Navigator>
        <Stack.Screen
          key="Login"
          name="Login"
          component={Login}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#333",
            },
          }}
        />
        <Stack.Screen
          key="Cadastro"
          name="Cadastro"
          component={SignUp}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#333",
            },
          }}
        />
        <Stack.Screen
          key="Home"
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#333",
            },
          }}
        />
        <Stack.Screen
          key="Users"
          name="Users"
          component={Users}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#333",
            },
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
