import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StoreScreen from "./components/StoreScreen";
import OrdersScreen from "./components/OrdersScreen";
import ConsultScreen from "./components/ConsultScreen";
import HomeScreen from "./components/HomeScreen";
import BulletinScreen from "./components/BulletinScreen";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ showLabel: false }}
      screenOptions={{
        headerShown: false,
        tabBarshowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Feather
                name="sun"
                size={24}
                color="black"
                style={{ color: focused ? "#0a6700" : "#000" }}
              />
              <Text
                style={{ marginTop: 3, color: focused ? "#0a6700" : "#000" }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="StoreScreen"
        component={StoreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5
                name="store"
                size={24}
                color="black"
                style={{ color: focused ? "#0a6700" : "#000" }}
              />
              <Text
                style={{ marginTop: 3, color: focused ? "#0a6700" : "#000" }}
              >
                Store
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="list-alt"
                size={24}
                color="black"
                style={{ color: focused ? "#0a6700" : "#000" }}
              />
              <Text
                style={{
                  marginTop: 3,
                  color: focused ? "#0a6700" : "#000",
                }}
              >
                Orders
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ConsultScreen"
        component={ConsultScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="ios-leaf-outline"
                size={24}
                color="black"
                style={{ color: focused ? "#0a6700" : "#000" }}
              />
              <Text
                style={{ marginTop: 3, color: focused ? "#0a6700" : "#000" }}
              >
                Consult
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="BulltinScreen"
        component={BulletinScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Entypo
                name="notification"
                size={24}
                color="black"
                style={{ color: focused ? "#0a6700" : "#000" }}
              />
              <Text
                style={{ marginTop: 3, color: focused ? "#0a6700" : "#000" }}
              >
                Bulletin
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
