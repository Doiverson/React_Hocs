import React from 'react';

const Enhancer = (WrappedComponent) =>
    class Hoc extends React.Component{
        render() {
            return(
                <WrappedComponent
                    {...this.props}
                    secretToLife={42}
                />
            )
        }
    }

export default Enhancer
