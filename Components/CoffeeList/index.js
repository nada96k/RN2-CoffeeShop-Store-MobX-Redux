import React from "react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import cafes from "./list";

// Component
import CoffeeItem from "./CoffeeItem";
import Cart from "./Cart";

const CoffeeList = () => {
  const cafeList = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
  return (
    <Content>
      <List>{cafeList}</List>
    </Content>
  );
};

CoffeeList.navigationOptions = {
  title: "Coffee List",
  headerRight: <Cart />
};

export default CoffeeList;
