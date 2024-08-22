import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { useContext, useState } from "react";
import { UserContext } from "../data/userContext";
import { Alert } from "react-native";

export default function Address() {
  const navigation = useNavigation();
  const { userDetails, setUserDetails } = useContext(UserContext);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleAddress = (text) => {
    setAddress(text);
    setUserDetails((prev) => ({ ...prev, address: text }));
  };
  const handleCity = (text) => {
    setCity(text);
    setUserDetails((prev) => ({ ...prev, city: text }));
  };
  const handleState = (text) => {
    setState(text);
    setUserDetails((prev) => ({ ...prev, state: text }));
  };
  const handleZip = (text) => {
    setZip(text);
    setUserDetails((prev) => ({ ...prev, zip: text }));
  };
  const checkInputs = () => {
    if (address && zip && city && state) {
      navigation.navigate("payment");
    } else {
      Alert.alert("fill all fields");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Address Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="grey"
          value={address}
          onChangeText={handleAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          placeholderTextColor="grey"
          value={city}
          onChangeText={handleCity}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          placeholderTextColor="grey"
          value={state}
          onChangeText={handleState}
        />
        <TextInput
          style={styles.input}
          placeholder="Zip code"
          placeholderTextColor="grey"
          value={zip}
          onChangeText={handleZip}
        />
        <Pressable style={styles.button} onPress={() => checkInputs()}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5, // Adds shadow on Android
    shadowColor: "#000", // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginBottom: 20, // Moves the card up slightly
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
