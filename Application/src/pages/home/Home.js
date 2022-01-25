import React, { Component } from 'react'
import { View, Text,TouchableOpacity,ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Entypo,Octicons } from '@expo/vector-icons'; 
import {Inputs} from "../../components/ui/Inputs";

export class Home extends Component {
    state={
        matter:''
    }
    render() {
        return (
            <View style={{flex:1,margin:10}}>
                 <View style={{padding:10,margin:10,backgroundColor:'#FFF',elevation:10}}>
                    <Text>Search Matters</Text>
                    <Inputs
                    ph={'Enter your matter'}
                    val={this.state.matter}
                    onChangeTexts={(value)=>{this.setState({matter:value})}} />
                </View>
                <ScrollView horizontal={true} style={{paddingBottom:20,height:150}}>
                    <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate('Track')}}
                    style={{padding:20,paddingLeft:40,paddingRight:40,backgroundColor:'#c92690',width:150,height:100,alignItems:'center',marginRight:10}}
                    >
                        <Entypo name="location" size={24} color="white" />
                        <Text style={{color:'#FFF',fontSize:10,marginTop:10}}>Track Location</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate('TrackLive')}}
                    style={{padding:20,paddingLeft:40,height:100,paddingRight:40,backgroundColor:'#8826c9',width:150,alignItems:'center',marginRight:10}}
                    >
                        <Entypo name="location-pin" size={24} color="white" />
                        <Text style={{color:'#FFF',fontSize:10,marginTop:10}}>Live Location</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate('InternationalLaw')}}
                    style={{padding:20,paddingLeft:40,height:100,paddingRight:40,backgroundColor:'#8826c9',width:180,alignItems:'center'}}
                    >
                        <Octicons name="law" size={24} color="white" />
                        <Text style={{color:'#FFF',fontSize:10,marginTop:10}}>International Law</Text>
                    </TouchableOpacity>
                </ScrollView>
               
            
        </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
