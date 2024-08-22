import { View, Text, ScrollView, StyleSheet } from "react-native";
import { UserContext } from "../../data/userContext";
import { useContext } from "react";

const Profile = () => {
  const { userDetails } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Details</Text>
          <Text style={styles.cardText}>{userDetails.name}</Text>
          <Text style={styles.cardText}>{userDetails.number}</Text>
          <Text style={styles.cardText}>{userDetails.email}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Address Details</Text>
          <Text style={styles.cardText}>{userDetails.address}</Text>
          <Text style={styles.cardText}>{userDetails.city}</Text>
          <Text style={styles.cardText}>{userDetails.state}</Text>
          <Text style={styles.cardText}>{userDetails.zip}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Card Details</Text>
          <Text style={styles.cardText}>{userDetails.card}</Text>
          <Text style={styles.cardText}>{userDetails.expire}</Text>
          <Text style={styles.cardText}>{userDetails.cvv}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
});

export default Profile;
