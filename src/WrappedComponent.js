import React from 'react'
import Enhancer from './Enhancer'

const SecretToLife = (props) => {
    return (
        <div>
            {props.secretToLife}
        </div>
    )
}

const WrappedComponent = Enhancer(SecretToLife);

export default WrappedComponent
