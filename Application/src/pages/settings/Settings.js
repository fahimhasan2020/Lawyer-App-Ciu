import React, { Component } from 'react'
import { View,StyleSheet,ScrollView,TouchableHighlight,StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { Switch, HStack, Text, Center, NativeBaseProvider } from "native-base"
import {Inputs,Passwords,InputButtonBlue} from "../../components/ui/Inputs";
export class Settings extends Component {
    state={
        location:true,
        notification:false,
        cookies:false,
        info:false
    }
    render() {
        return (
            <NativeBaseProvider>
            <ScrollView style={styles.container}>
               <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
               <View style={{padding:10,margin:2,elevation:10,backgroundColor:'#FFF'}}>
                 <Text>Basic Settings</Text> 
                 <HStack space={10}>
      <Text style={{marginTop:15}}>Location</Text>
      <Switch size="sm" />
    </HStack>
    <HStack space={10}>
      <Text style={{marginTop:15}}>Camera</Text>
      <Switch isChecked={true} size="sm" />
    </HStack>
    <HStack space={4}>
      <Text style={{marginTop:15}}>Call Access</Text>
      <Switch isChecked={true} size="sm" />
    </HStack>
               </View>
                  
            </ScrollView>
            </NativeBaseProvider>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)