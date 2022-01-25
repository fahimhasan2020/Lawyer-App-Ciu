import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Inputs} from "../../components/ui/Inputs";

export class Search extends Component {
    state={
        matter:''
    }
    render() {

        return (
            <View style={{flex:1,margin:10}}>
            <View style={{padding:10,margin:10,backgroundColor:'#FFF',elevation:10}}>
               <Text>Search Bangladeshi Law</Text>
               <Inputs
               ph={'Enter your matter'}
               val={this.state.matter}
               onChangeTexts={(value)=>{this.setState({matter:value})}} />
           </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
