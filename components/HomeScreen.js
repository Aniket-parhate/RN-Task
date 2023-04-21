import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={[styles.card, styles.leftSide]}>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/menu.png")}
                style={{ width: 50, height: 50 }}
                tintColor="#024a1f"
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.card, styles.rightSide]}>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/search.png")}
                style={{ width: 35, height: 35 }}
                tintColor="#024a1f"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/cart.png")}
                style={{ width: 30, height: 30 }}
                tintColor="#024a1f"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/pic.jpg")}
                style={{ width: 38, height: 38, borderRadius: 6 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.headerText]}>
          <Text style={{ color: "green", fontSize: 18 }}>Friday, 4 Sep</Text>
          <Text style={{ color: "#005f00", fontSize: 22, fontWeight: "bold" }}>
            Namaste, Angela
          </Text>
        </View>
        <View style={styles.mood}>
          <Text style={styles.question}>
            How are you <Text style={{ fontWeight: "bold" }}>feeling</Text>{" "}
            today?
          </Text>
          <View style={styles.emojis}>
            <Entypo name="emoji-sad" size={30} color="#016501" />
            <Entypo name="emoji-neutral" size={30} color="#016501" />
            <MaterialCommunityIcons
              name="emoticon-happy-outline"
              size={34}
              color="#016501"
            />
            <Entypo name="emoji-happy" size={30} color="#016501" />

            <Entypo name="emoji-flirt" size={30} color="#016501" />
          </View>
          <Slider
            style={{ width: 350, height: 20, marginBottom: 25, marginLeft: 8 }}
            minimumTrackTintColor="#016501"
            maximumTrackTintColor="#000000"
          />
        </View>

        <View>
          <View style={styles.detailsCard}>
            <Ionicons name="cloudy-night-outline" size={40} color="#006e00" />
            <Text style={{ color: "#006e00", fontSize: 20 }}>
              You slept for <Text style={{ fontWeight: "bold" }}>8 hours</Text>
            </Text>
            <MaterialCommunityIcons name="restore" size={40} color="#006e00" />
          </View>
          <View style={styles.detailsCard}>
            <Foundation name="foot" size={40} color="#006e00" />
            <Text style={{ color: "#006e00", fontSize: 20 }}>
              You walked <Text style={{ fontWeight: "bold" }}>1200 steps</Text>
            </Text>
            <MaterialCommunityIcons name="restore" size={40} color="#006e00" />
          </View>
          <View style={styles.detailsCard}>
            <Ionicons name="timer-outline" size={40} color="#006e00" />
            <Text style={{ color: "#006e00", fontSize: 20 }}>
              Screen Time is <Text style={{ fontWeight: "bold" }}>5 hours</Text>
            </Text>
            <MaterialCommunityIcons name="restore" size={40} color="#006e00" />
          </View>
          <View style={[styles.detailsCard, { marginBottom: 30 }]}>
            <FontAwesome name="heartbeat" size={40} color="#006e00" />
            <Text style={{ color: "#006e00", fontSize: 20 }}>
              Connect your{" "}
              <Text style={{ fontWeight: "bold" }}>Health App</Text>
            </Text>
            <Ionicons name="ios-add-sharp" size={40} color="#006e00" />
          </View>
        </View>

        <View
          style={{
            marginBottom: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#008500" }}>
            Shop for Health & Beauty
          </Text>
          <AntDesign name="arrowright" size={32} color="#008500" />
        </View>
        <ScrollView horizontal>
          <View
            style={{
              paddingBottom: 10,
              paddingBottom: 20,
              flex: 1,
              padding: 5,
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                backgroundColor: "#f3f4c0ca",
                height: 75,
                width: 75,
                alignItems: "center",
                padding: 5,
                borderRadius: 10,
                marginRight: 15,
              }}
            >
              <Image
                source={require("../assets/images/hair.png")}
                style={styles.image}
              />
              <Text style={{ color: "green", marginTop: 20 }}>HAIR</Text>
            </View>
            <View
              style={{
                backgroundColor: "#f3f4c0ca",
                height: 75,
                width: 75,
                alignItems: "center",
                padding: 5,
                borderRadius: 10,
                marginRight: 15,
              }}
            >
              <Image
                source={require("../assets/images/skin-care.png")}
                style={styles.image}
              />
              <Text style={{ color: "green", marginTop: 20 }}>SKIN</Text>
            </View>
            <View
              style={{
                backgroundColor: "#f3f4c0ca",
                height: 75,
                width: 75,
                alignItems: "center",
                padding: 5,
                borderRadius: 10,
                marginRight: 15,
              }}
            >
              <Image
                source={require("../assets/images/femenine.png")}
                style={styles.image}
              />
              <Text style={{ color: "green", marginTop: 20 }}>WOMEN</Text>
            </View>
            <View
              style={{
                backgroundColor: "#f3f4c0ca",
                height: 75,
                width: 75,
                alignItems: "center",
                padding: 5,
                borderRadius: 10,
                marginRight: 15,
              }}
            >
              <Image
                source={require("../assets/images/gender.png")}
                style={styles.image}
              />
              <Text style={{ color: "green", marginTop: 20 }}>SEXUAL</Text>
            </View>
            <View
              style={{
                backgroundColor: "#f3f4c0ca",
                height: 75,
                width: 75,
                alignItems: "center",
                padding: 5,
                borderRadius: 10,
                marginRight: 15,
              }}
            >
              <Image
                source={require("../assets/images/stomach.png")}
                style={styles.image}
              />
              <Text style={{ color: "green", marginTop: 23, fontSize: 12 }}>
                DIGESTION
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#f3f4c0ca",
                height: 75,
                width: 75,
                alignItems: "center",
                padding: 5,
                borderRadius: 10,
                marginRight: 15,
              }}
            >
              <Image
                source={require("../assets/images/healthcare.png")}
                style={styles.image}
              />
              <Text style={{ color: "green", marginTop: 20 }}>HEALTH</Text>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            marginTop: 30,
            marginBottom: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#008500" }}>
            Upcoming Appointments
          </Text>
          <Text style={{ fontSize: 18, color: "#008500" }}>Clear</Text>
        </View>
        <View
          style={{
            marginBottom: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            borderWidth: 1,
            borderColor: "green",
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="calendar-check" size={35} color="#006400" />
          <Text style={{ fontWeight: "bold", fontSize: 17, color: "#008500" }}>
            No New Appointments
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#008500" }}>
            Books Now
          </Text>
        </View>
        <View style={{ marginBottom: 10, padding: 5 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#008500" }}>
            Recent Orders
          </Text>
          <ScrollView horizontal>
            <View>
              <View style={styles.productCard}>
                <Image
                  source={require("../assets/images/product1.jpg")}
                  style={{ height: 130, width: 130, borderRadius: 15 }}
                />
                <View style={{ flexDirection: "column", padding: 20 }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Kuntal Care Capsule -{"\n"}Herbal Remedy fot Hair{"\n"}Care
                  </Text>
                  <Text
                    style={{
                      marginTop: 3,
                      color: "green",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    1,499
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.productCard}>
                <Image
                  source={require("../assets/images/product1.jpg")}
                  style={{ height: 130, width: 130, borderRadius: 15 }}
                />
                <View style={{ flexDirection: "column", padding: 20 }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Kuntal Care Capsule -{"\n"}Herbal Remedy fot Hair{"\n"}Care
                  </Text>
                  <Text
                    style={{
                      marginTop: 3,
                      color: "green",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    1,499
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ marginBottom: 15, padding: 5 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#008500" }}>
            Amrutam Blog
          </Text>
        </View>
        <ScrollView horizontal>
          <View style={styles.blogCard}>
            <View>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", marginBottom: 10 }}
              >
                COVID Caes {"\n"}Rapidly High{"\n"}Due to weeks...
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#006c00",
                  padding: 10,
                  width: 95,
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 13 }}>Read More</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 16, marginBottom: 10, marginTop: 5 }}>
                06 Dec 2022
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 40,
              }}
            >
              <Image
                source={require("../assets/images/pic.jpg")}
                style={{ height: 150, width: 160, borderRadius: 15 }}
              />
            </View>
          </View>
          <View style={styles.blogCard}>
            <View>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", marginBottom: 10 }}
              >
                COVID Caes {"\n"}Rapidly High{"\n"}Due to weeks...
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#006c00",
                  padding: 10,
                  width: 95,
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 13 }}>Read More</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 16, marginBottom: 10, marginTop: 5 }}>
                06 Dec 2022
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 40,
              }}
            >
              <Image
                source={require("../assets/images/pic.jpg")}
                style={{ height: 150, width: 160, borderRadius: 15 }}
              />
            </View>
          </View>
        </ScrollView>

        <View style={{ marginBottom: 20, padding: 5 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#008500" }}>
            What are you looking for ?
          </Text>
        </View>
        <View style={styles.categories}>
          <View style={{ marginRight: 20 }}>
            <View
              style={{
                backgroundColor: "#ffffc1",
                height: 150,
                width: 150,
                borderRadius: 15,
                flexDirection: "row",
              }}
            >
              <FontAwesome
                name="check-square-o"
                size={70}
                color="green"
                style={{ marginLeft: 45, marginTop: 45 }}
              />
            </View>

            <Text
              style={{
                fontSize: 20,
                color: "#006900",
                marginLeft: 23,
                marginTop: 20,
                alignSelf: "flex-end",
                marginBottom: 22,
                marginRight: 22,
                marginLeft: "auto",
              }}
            >
              Take a Quiz
            </Text>
          </View>
          <View style={styles.categories}>
            <View
              style={{
                backgroundColor: "#ffffc1",
                height: 150,
                width: 150,
                borderRadius: 15,
                flexDirection: "row",
              }}
            >
              <AntDesign
                name="book"
                size={65}
                color="green"
                style={{ marginLeft: 45, marginTop: 45 }}
              />
            </View>

            <Text
              style={{
                fontSize: 20,
                color: "#006900",
                marginLeft: 23,
                marginTop: 20,
                alignSelf: "flex-end",
                marginBottom: 22,
                marginRight: 35,
                marginLeft: "auto",
              }}
            >
              E-Books
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: 20, padding: 5 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#008500" }}>
            Top Rated Doctors
          </Text>
        </View>
        {/* <ScrollView horizontal> */}
        <View style={styles.doctorCard}>
          <View style={{ marginRight: 10 }}>
            <Image
              source={require("../assets/images/doctor.jpg")}
              style={{
                width: 200,
                height: 170,
                resizeMode: "cover",
                borderRadius: 15,
              }}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                color: "#017401",
                marginTop: 10,
              }}
            >
              Dr. Karan Pathak
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#006100",
                borderRadius: 6,
                width: 80,
                height: 30,
                alignItems: "center",
                marginLeft: 60,
                marginTop: 10,
                padding: 5,
              }}
            >
              <Text style={{ color: "white" }}>Follow</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.doctorCard}>
            <View style={{ marginRight: 20 }}>
              <Image
                source={require("../assets/images/doctor.jpg")}
                style={{
                  width: 200,
                  height: 170,
                  resizeMode: "cover",
                  borderRadius: 15,
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  color: "#017401",
                  marginTop: 10,
                }}
              >
                Dr. Karan Pathak
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#006100",
                  borderRadius: 6,
                  width: 80,
                  height: 30,
                  alignItems: "center",
                  marginLeft: 60,
                  marginTop: 10,
                  padding: 5,
                }}
              >
                <Text style={{ color: "white" }}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </ScrollView> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
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
  headerText: {
    marginTop: 10,
  },
  mood: {
    width: "100%",
    height: 170,
    backgroundColor: "#fff6d8b3",
    borderRadius: 10,
    marginTop: 30,
  },
  question: {
    fontSize: 20,
    color: "#007300",
    padding: 20,
  },
  emojis: {
    marginTop: -20,
    padding: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  image: {
    height: 55,
    width: 55,
    paddingBottom: 10,
    color: "#005f1e",
  },
  productCard: {
    marginBottom: 15,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    flexDirection: "row",
    marginRight: 13,
    width: 350,
  },
  blogCard: {
    marginBottom: 30,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    flexDirection: "row",
    marginRight: 15,
    width: 350,
    padding: 15,
  },
  categories: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    width: 150,
    marginBottom: 20,
    height: 220,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  doctorCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    width: 200,
    marginBottom: 200,
    height: 270,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
