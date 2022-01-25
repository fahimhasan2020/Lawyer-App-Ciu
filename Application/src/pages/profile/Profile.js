import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import {NativeBaseProvider,Avatar,Text} from "native-base"
import { connect } from 'react-redux'

export class Profile extends Component {

    render() {
        return (
            <NativeBaseProvider>
            <View style={{alignItems:'center',paddingTop:10}}>
           
      <Avatar
        bg="green.500"
        alignSelf="center"
        size="2xl"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_1000x1000.jpg",
        }}
      >
        SS
      </Avatar>
            </View>
            <View style={{alignItems:'center',padding:20,backgroundColor:'#FFF',elevation:10,marginTop:20,marginLeft:5,marginRight:5}}>
                <Text>Username:</Text>
                <Text>email:</Text>
                <View style={{alignItems:'baseline'}}>
                <Text>Age: </Text>
                </View>
            </View>
            </NativeBaseProvider>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
