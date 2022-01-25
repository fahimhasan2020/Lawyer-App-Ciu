import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Location from 'expo-location';

export class Track extends Component {
   state={
       location:null
   }
   componentDidMount = async()=>{
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({location:location});
    console.log(location);
   }
    render() {
        return (
            <View style={{margin:10,padding:10,backgroundColor:'#FFF',elevation:10}}>
                <Text style={{marginBottom:20,fontWeight:'bold',color:'#CCC'}}> Your instant Location </Text>
                {this.state.location !== null?<View><Text>Latitude:{this.state.location.coords.latitude}</Text><Text>Longitude:{this.state.location.coords.longitude}</Text></View>:null}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Track)
