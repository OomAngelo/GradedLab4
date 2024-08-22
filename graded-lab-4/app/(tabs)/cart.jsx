import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { MenuContext } from "../../data/context";
import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const imageMap = {
  1: require("../../data/images/BC.jpeg"),
  2: require("../../data/images/BW.jpeg"),
  3: require("../../data/images/BB.jpeg"),
  4: require("../../data/images/CK.jpeg"),
  5: require("../../data/images/MP.jpeg"),
  6: require("../../data/images/CCC.jpeg"),
  7: require("../../data/images/MT.jpeg"),
  8: require("../../data/images/VK.jpeg"),
  9: require("../../data/images/MEAT.jpeg"),
  10: require("../../data/images/KS.jpeg"),
};

const Cart = () => {
  const { menuItems, setMenuItems } = useContext(MenuContext);
  const [total, setTotal] = useState(0);

  const clearCart = () => {
    setMenuItems((prevItems) =>
      prevItems.map((item) => (item.id ? { ...item, selected: false } : item))
    );
  };

  const updateList = (id) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const cartItems = menuItems.filter((item) => item.selected === true);
  useEffect(() => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalPrice);
  }, [cartItems]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={imageMap[item.id]} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
            <Pressable
              style={styles.button}
              onPress={() => updateList(item.id)}
            >
              <Text style={styles.buttonText}>Remove</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R{total.toFixed(2)}</Text>
        <Pressable style={styles.checkoutButton} onPress={() => clearCart()}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </Pressable>
      </View>
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
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  totalContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    marginTop: 20,
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Cart;
