import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { useContext, useState } from "react";
import { UserContext } from "../data/userContext";
import { Alert } from "react-native";

export default function Payment() {
  const { userDetails, setUserDetails } = useContext(UserContext);
  const navigation = useNavigation();

  const [card, setCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [expire, setExpire] = useState("");

  const handleCard = (text) => {
    setCard(text);
    setUserDetails((prev) => ({ ...prev, card: text }));
  };
  const handleCvv = (text) => {
    setCvv(text);
    setUserDetails((prev) => ({ ...prev, cvv: text }));
  };
  const handleExpire = (text) => {
    setExpire(text);
    setUserDetails((prev) => ({ ...prev, expire: text }));
  };
  const checkInputs = () => {
    if (card && cvv && expire) {
      navigation.navigate("(tabs)");
    } else {
      Alert.alert("fill all fields");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Payment Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor="grey"
          value={card}
          onChangeText={handleCard}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          placeholderTextColor="grey"
          value={cvv}
          onChangeText={handleCvv}
        />
        <TextInput
          style={styles.input}
          placeholder="YY/MM"
          placeholderTextColor="grey"
          value={expire}
          onChangeText={handleExpire}
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
    paddingTop: 40,
  },
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
