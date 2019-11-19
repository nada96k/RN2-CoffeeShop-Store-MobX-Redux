import React from "react";
import { Icon, Button } from "native-base";
import { withNavigation } from "react-navigation";

function Cart(props) {
  return (
    <Button onPress={() => props.navigation.navigate("CartScreen")} full danger>
      <Icon type="AntDesign" name="shoppingcart" />
    </Button>
  );
}

export default withNavigation(Cart);
