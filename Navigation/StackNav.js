import { createStackNavigator } from "react-navigation-stack";

import List from "../Components/CoffeeList";
import Detail from "../Components/CoffeeDetail";
import Cart from "../Components/CoffeeCart";
import Login from "../Components/Login";

const StackNav = createStackNavigator(
  {
    ListScreen: List,
    DetailScreen: Detail,
    CartScreen: Cart,
    LoginScreen: Login
  },
  {
    initialRouteName: "LoginScreen"
  }
);

export default StackNav;