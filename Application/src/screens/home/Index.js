
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ImageBackground } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Container, Header, Content, Badge,Body,H3,CheckBox} from 'native-base';
import {createDrawerNavigator} from "@react-navigation/drawer";
import { connect } from 'react-redux'
import store from "../../store/store";
import {Divider,Avatar} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome'
import { flipY,fromRight } from 'react-navigation-transitions';
import {createStackNavigator} from '@react-navigation/stack'
import Loading from "../loading/Loading";
import {createAppContainer} from "@react-navigation/native";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Forgot from "../auth/Forgot";
import Home from "./Home";
import Contents from "./Contents";

class Index extends Component {
    render() {
        if (this.props.loggedIn === false){
            return <NonLoggedIn />
        }else {
            return <LoggedIn />
        }
    }
}
/*Non authenticated routes*/
const mainStack = createStackNavigator({
    Loader:{screen:Loading},
    Login:{screen:Login},
    Register:{screen:Register},
    Forgot:{screen:Forgot}
},{
    headerMode:'none',
    initialRouteName:'Loader'
});
const NonLoggedIn = createAppContainer(mainStack);

const SwitchTwoNavigation = createStackNavigator({
    Home:{screen: Home},
    Contents:{screen:Contents},
});

const StackTwo = createStackNavigator({
    Home:{screen: SwitchTwoNavigation,navigationOptions:({navigation})=>({
            tintColor:'#eeeeee',
            activeTintColor:'#ffffff',
            headerStyle:{
                backgroundColor:'#066089',
            },
            headerLeft: (
                <TouchableOpacity
                    onPress={()=>{navigation.openDrawer()}}>
                    <Icon name="navicon" style={{color:'#eeeaee',margin:20}} size={25} />
                </TouchableOpacity>

            ),
        })
    },
},{
    transitionConfig: () => fromRight(500),
    defaultNavigationOptions:{
        headerTintColor: '#066089',
        tintColor:'#adadad',
    },
    headerTitleStyle:{
        color:'#adadad'
    }
});

const CustomDrawerDesign = (props)=>(
    <Container>
        <Header style={styles.header}>
            <ImageBackground source={require('../../../assets/img/bg3.jpg')} style={{width: '100%', height: 'auto'}}>
                <Body style={{alignItems:'center',justifyContent:'center'}}>
                    <View>
                        <Text style={{color:'green'}}>Hello world</Text>
                    </View>
                </Body>
            </ImageBackground>
        </Header>
        <View>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('Profile')}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                        Profile
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('Settings')}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                        Settings
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('Info')}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                        Info
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{store.dispatch({type:'LOGOUT',logged:false})}}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                        Logout
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </Container>
);

const DrawerNavigation = createDrawerNavigator({
        Home:{screen:StackTwo},
    },{
        contentComponent:CustomDrawerDesign,
        drawerOpenRoute:'DrawerOpen',
        drawerCloseRoute:'DrawerClose',
    }
);
const LoggedIn = createAppContainer(DrawerNavigation);
const mapStateToProps = (state) => ({
    loggedIn: state.auth.loggedIn
});
const mapDispatchToProps = {
    //
};
export default connect(mapStateToProps, mapDispatchToProps)(Index)
const styles = StyleSheet.create({
    header: {
        height:150,
        width:'100%',
        marginBottom:30,
        backgroundColor:'#066089',
    },
    drawerButtons:{
        padding:5,
        flexDirection:'row',
        height: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});