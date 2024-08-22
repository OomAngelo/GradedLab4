import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { MenuContext } from "../../data/context";
import { useContext, useState } from "react";

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

export default function Menu() {
  const { menuItems, setMenuItems } = useContext(MenuContext);

  const updateList = (id) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {menuItems.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={imageMap[item.id]} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
            <Button
              title={item.selected ? "Remove from cart" : "Add to cart"}
              onPress={() => updateList(item.id)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "gray",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
