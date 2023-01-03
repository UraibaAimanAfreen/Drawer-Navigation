import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Settings from "./Settings";
import SignIN from "./SignIN";
import Signout from "./Signout";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="SignIN" component={SignIN} />
        <Drawer.Screen name="Signout" component={Signout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
