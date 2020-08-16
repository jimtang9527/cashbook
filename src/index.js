import {
  AppRegistry
} from "react-native"
import Home from "./app"
AppRegistry.registerComponent("Home", () => Home)
AppRegistry.runApplication("Home", {
  rootTag: document.getElementById("root")
})