import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Index extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text> This is our home </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
