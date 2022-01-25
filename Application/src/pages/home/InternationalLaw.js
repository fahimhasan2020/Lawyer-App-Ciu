import React, { Component } from 'react'
import { View, Text ,TOuchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Inputs} from "../../components/ui/Inputs";

export class InternationalLaw extends Component {
    state={
        matter:''
    }

    render() {
        return (
            <View style={{flex:1,margin:10}}>
            <View style={{padding:10,margin:10,backgroundColor:'#FFF',elevation:10}}>
               <Text>Search Law Rules</Text>
               <Inputs
               ph={'Enter issues'}
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

export default connect(mapStateToProps, mapDispatchToProps)(InternationalLaw)
