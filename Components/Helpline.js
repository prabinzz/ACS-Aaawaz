import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

export const Helpline = ({ navigation }) => {
  const policeBtnPressed = () => {
    // police btn
    alert("Police Btn");
  };

  const fireDepBtnPressed = () => {
    // fire Departemtn btn pressed
    alert("Fire Departemnt Btn");
  };

  const ambulanceBtnPressed = () => {
    // ambulance btn pressed
    alert("Ambulance Btn");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container0}>
          <Text style={styles.text}>Helplines</Text>
        </View>

        {/* <View style={styles.nothing}>
      </View> */}

        <View style={styles.container1}>
          <Image
            source={require("../assets/home.jpg")}
            style={{
              width: 300,
              height: 200,
              top: 20,
              borderRadius: 10,
              marginLeft: 25,
            }}
          />
          <Text style={styles.text1}>Police</Text>
          <Text style={styles.text2}>Phone: 988401415</Text>
          <Text style={styles.text2}>Location: location Info</Text>

          {/* <View style = {styles.buttons}>
        <Button title ="Contact" style={styles.buttons}/>
        </View> */}

          <View style={styles.containerr}>
            <TouchableHighlight
              onPress={policeBtnPressed}
              underlayColor="white"
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Contact</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.container2}>
          <Image
            source={require("../assets/home.jpg")}
            style={{
              width: 300,
              height: 200,
              top: 20,
              borderRadius: 10,
              marginLeft: 25,
            }}
          />
          <Text style={styles.text1}>Fire Department</Text>
          <Text style={styles.text2}>Phone: 988401415</Text>
          <Text style={styles.text2}>Location: location Info</Text>

          <View style={styles.containerr}>
            <TouchableHighlight
              onPress={fireDepBtnPressed}
              underlayColor="white"
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Contact</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.container3}>
          <Image
            source={require("../assets/home.jpg")}
            style={{
              width: 300,
              height: 200,
              top: 20,
              borderRadius: 10,
              marginLeft: 25,
            }}
          />
          <Text style={styles.text1}>Ambulance</Text>
          <Text style={styles.text2}>Phone: 988401415</Text>
          <Text style={styles.text2}>Location: location Info</Text>

          <View style={styles.containerr}>
            <TouchableHighlight
              onPress={ambulanceBtnPressed}
              underlayColor="white"
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Contact</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 16,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    // height: 1500,
  },

  text: {
    fontSize: 50,
    fontStyle: "roboto",

    // top: 70,
    // top: 30,
  },

  text1: {
    fontSize: 40,
    fontStyle: "roboto",
    top: 25,
    marginBottom: 20,
    alignSelf: "center",
  },

  text2: {
    fontSize: 30,
    fontStyle: "roboto",
    // top: 15,
    alignSelf: "center",
    // marginLeft: 10,
  },

  // nothing: {
  //   flex: 1,
  //   width: 50,
  //   backgroundColor: 'white',
  // },

  container1: {
    flex: 1,
    backgroundColor: "#e6e6fa",
    alignItems: "center",
    // justifyContent: 'center',
    height: 450,
    width: 350,
    borderRadius: 20,
  },

  container2: {
    flex: 1,
    backgroundColor: "#E5D2C4",
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 450,
    width: 350,
    marginTop: 30,
    borderRadius: 20,
  },

  container3: {
    flex: 1,
    backgroundColor: "#C4D7E5",
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 450,
    width: 350,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 20,
  },

  container0: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
  },

  containerr: {
    paddingTop: 20,
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
    fontSize: 30,
    fontStyle: "roboto",
  },
});

// import React from "react";
// import { View, Text } from "react-native";

// export const Helpline = ({ navigation }) => {
//   return (
//     <View>
//       <Text> Helpline</Text>
//     </View>
//   );
// };
