import React from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";
import StackNav from "../../Navigation/StackNav";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

const HomePage = () => {
  return (
    <Container style={styles.transparent}>
      <View style={styles.overlay} />
      <Header style={styles.transparent} />
      <StackNav />
    </Container>
  );
};

export default HomePage;
