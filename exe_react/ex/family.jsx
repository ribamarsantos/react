import React from 'react'

// de onde vai clonar e  o 2 o que vai  clonar
// transforma cada um dos elementos no map
export default props => (
    <div>
        <h1> Família</h1>                
        { React.Children.map(props.children,
             child=> React.cloneElement( child, {...props})) }
    </div>
)