import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldAction'

class Field extends Component {
    
    render(){
        return (
            <div>
                 <label> {this.props.value} </label> <br />
                 <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        value: state.field.value
    }
}
//1
function mapDispatchToProps(dispactch){
    return bindActionCreators({ changeValue}, dispactch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)