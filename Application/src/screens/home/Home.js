import React, { Component } from 'react'
import {Text, StyleSheet, ScrollView} from 'react-native'
import {  Card, CardItem, Body } from 'native-base';
import { connect } from 'react-redux'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Geocoder from 'react-native-geocoding';

class Home extends Component {
    state = {
        errorMessage: '',
        locai:'',
        activeIndex:0,
    };
    componentDidMount() {

        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        Geocoder.init("AIzaSyAwyZimvA9z_SzFmL55fpJSoeYrloU6RF4");
        Geocoder.from(location.coords.latitude,location.coords.longitude)
            .then(json => {
                var addressComponent = json.results[0].formatted_address;
                this.setState({locai:addressComponent})
            })
            .catch(error => console.warn(error));
    };
    render() {
        let local = "....";
        if(this.state.locai !== ''){
            local = this.state.locai;
        }
        return (
            <ScrollView style={styles.container}>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                {local}
                            </Text>
                            <Text style={{color:'#b9b9b9'}}>
                                Set your current location.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>

            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    }
});
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Home)