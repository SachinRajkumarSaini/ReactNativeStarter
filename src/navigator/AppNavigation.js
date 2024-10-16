import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../app/homeScreen/home';
import ProfileScreen from '../app/profileScreen/profile';
import SplashScreen from '../auth/splashScreen/splash';
import LoginScreen from '../auth/loginScreen/login';
import {Colors} from '../theme';
import DrawerContents from './DrawerContents';

const {width} = Dimensions.get('window');

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContents {...props} />}
      initialRouteName="DrawerHome">
      <Drawer.Screen name="DrawerHome" component={HomeScreen} />
      <Drawer.Screen
        name="Profile"
        options={{swipeEnabled: false}}
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

export default StackNavigator;
