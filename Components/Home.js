import React from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import { navi } from "@react-navigation/native";

export function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container0}>
          <Text style={styles.text}>MY VOICE</Text>
          <Image
            source={{
              uri: "https://reactnative.dev/docs/assets/p_cat2.png",
            }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View
          style={styles.container1}
          onTouchEnd={() => navigation.navigate("Interaction")}
        >
          <Text style={styles.text1}>Interaction</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text1}>Learning</Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.text1}>Helpline</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // logo: {
  //   uri: 'https://reactnative.dev/img/tiny_logo.png',
  //   width: 64,
  //   height: 64
  // },

  container: {
    flex: 16,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    // height: 200,
  },

  text: {
    fontSize: 50,
    fontStyle: "roboto",
  },

  text1: {
    fontSize: 40,
    fontStyle: "roboto",
  },

  container1: {
    flex: 1,
    backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 500,
  },

  container2: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 500,
  },

  container3: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 500,
  },

  container0: {
    flex: 3,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 900,
  },
});
