import React, { Component } from 'react'
import { View, Text,Button } from 'react-native'
import { connect } from 'react-redux'
import  store  from '../store/store';
import { Entypo,Octicons,EvilIcons } from '@expo/vector-icons'; 
import {createStackNavigator,TransitionPresets,CardStyleInterpolators} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator,BottomTabBar} from "@react-navigation/bottom-tabs"
import {Index,Login,Register,Home,Search,Lawyers,Categories,Track,InternationalLaw,TrackLive,DIrectory,Forgot,Profile,Settings,Loader} from "./Include"
const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();
const Tab = createBottomTabNavigator();
import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,DrawerItem } from '@react-navigation/drawer';
function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
        label="Home"
        onPress={() =>{
            props.navigation.navigate('Home');
        }}
      />
      <DrawerItem
        label="Profile"
        onPress={() =>{
            props.navigation.navigate('Profile')
        }}
      />
      <DrawerItem
        label="Settings"
        onPress={() =>{
            props.navigation.navigate('Settings')
        }}
      />
        <DrawerItem
        label="Logout"
        onPress={() =>{
            store.dispatch({type:'LOGOUT',token: false});
        }}
      />
      </DrawerContentScrollView>
    );
  }
  
  
  const Drawer = createDrawerNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Bottom" options={defaultStackOptions} component={Bottoms} />
        <Stack.Screen name="Profile" options={defaultStackOptions} component={Profile} />
        <Stack.Screen name="Settings" options={defaultStackOptions} component={Settings} />
        <Stack.Screen name="Track" options={defaultStackOptions} component={Track} />
        <Stack.Screen name="TrackLive" options={defaultStackOptions} component={TrackLive} />
        <Stack.Screen name="InternationalLaw" options={defaultStackOptions} component={InternationalLaw} />
      </Stack.Navigator>
    );
  }

  function Bottoms() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home"  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }} component={Home} />
        <Tab.Screen options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="search" size={size} color={color} />
          ),
        }} name="Search" component={Search} />
        <Tab.Screen options={{
          tabBarLabel: 'Lawyers',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="law" size={size} color={color} />
          ),
        }} name="Lawyers" component={Lawyers} />
      </Tab.Navigator>
    );
  }


const defaultStackOptions = {
    headerShown:false,
    gestureEnabled:true,
    gestureDirection:'horizontal',
    cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
}
export class Router extends Component {
    render() {
        if(!this.props.loggedIn){
            return(
                <NavigationContainer>
                    <Stack.Navigator >
                        <Stack.Screen name="Loader" component={Loader} options={defaultStackOptions} />
                        <Stack.Screen name="Login" component={Login} options={defaultStackOptions} />
                        <Stack.Screen name="Register" component={Register} options={defaultStackOptions} />
                        <Stack.Screen name="Forgot" component={Forgot} options={defaultStackOptions} />
                        </Stack.Navigator>
                </NavigationContainer>
                    )
    } else{
        return(<NavigationContainer>
        <Drawer.Navigator initialRouteName="Main" drawerContent={(props) => <CustomDrawerContent {...props}/>} >
          <Drawer.Screen name="Main" options={{title:'Lawyers App'}} component={MyStack} />
        </Drawer.Navigator>
    </NavigationContainer>)
      
    }
}
}

const mapDispatchToProps = dispatch => {
    return{
        // 
    };

};
const mapStateToProps = state => {
    return {
      host: state.auth.host,
      loggedIn:state.auth.loggedIn,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Router)
