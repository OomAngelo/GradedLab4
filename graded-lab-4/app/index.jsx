import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { useContext, useState } from "react";
import { UserContext } from "../data/userContext";
import { Alert } from "react-native";

export default function User() {
  const navigation = useNavigation();
  const { userDetails, setUserDetails } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleName = (text) => {
    setName(text);
    setUserDetails((prev) => ({ ...prev, name: text }));
  };

  const handleEmail = (text) => {
    setEmail(text);
    setUserDetails((prev) => ({ ...prev, email: text }));
  };

  const handleNumber = (text) => {
    setNumber(text);
    setUserDetails((prev) => ({ ...prev, number: text }));
  };

  const checkInputs = () => {
    if (name && email && number) {
      navigation.navigate("address");
    } else {
      Alert.alert("fill all fields");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Enter Personal Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="grey"
          value={name}
          onChangeText={handleName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="grey"
          value={email}
          onChangeText={handleEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Number"
          placeholderTextColor="grey"
          value={number}
          onChangeText={handleNumber}
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
    padding: 16,
    paddingTop: 70,
  },
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    marginTop: -50, // Moves the card higher on the screen
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
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
