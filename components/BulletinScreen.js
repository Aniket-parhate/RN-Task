import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const BulletinScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.card, styles.leftSide]}>
          <AntDesign name="arrowleft" size={24} color="green" />
          <Text
            style={{
              marginRight: 90,
              fontSize: 17,
              color: "green",
              fontWeight: "bold",
            }}
          >
            Bulletin
          </Text>
        </View>

        <View style={[styles.card, styles.rightSide]}>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/search.png")}
              style={{ width: 35, height: 35, marginLeft: 80 }}
              tintColor="#024a1f"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/cart.png")}
              style={{ width: 30, height: 30, marginRight: 1 }}
              tintColor="#024a1f"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          padding: 5,
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            width: "50%",
            backgroundColor: "#006800",
            padding: 15,
            borderRadius: 10,
            marginRight: 5,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            Notifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "50%",
            backgroundColor: "#a4bca4",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "#000000" }}>Chats</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#006500",
          textAlign: "center",
          marginTop: 200,
        }}
      >
        No new notifications!
      </Text>
      <Ionicons
        name="notifications-outline"
        size={60}
        color="#006500"
        style={{ alignSelf: "center", marginTop: 20 }}
      />
    </View>
  );
};

export default BulletinScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    margin: 20,
  },
  rightSide: {
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 100,
    height: 100,
    alignItems: "center",
  },
});
