import React, { Component } from 'react'

// baseado em funcao tem q ter pelo menos uma funcao render()
// quando passa parametro por props ela vai como readOnly
// this.props e this.state é padrao vem por herança
// setstate dando um novo obj e evoluindo o obejto e nao alterar o objeto existente
export default class ClassComponent extends Component {

        constructor(props){
            // precisa passar o super
            super(props)
            this.state = { value : props.initialValue }
        }

        sum(delta){
            this.setState({ ...this.state ,value: this.state.value + delta })

        }

        render(){            
            return(
                <div> 
                    <h1>{this.props.label} </h1>
                    <h2>{this.state.value} </h2>
                    <button onClick={ () => this.sum(-1)} > Dec </button>
                    <button onClick={ () => this.sum(1)} > Inc </button>
                </div>
                
            )
        }
}