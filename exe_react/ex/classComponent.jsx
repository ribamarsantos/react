import React, { Component } from 'react'

// baseado em funcao tem q ter pelo menos uma funcao render()
export default class ClassComponent extends Component {
        render(){
            return(
                <h1>{this.props.value} </h1>
            )
        }
}