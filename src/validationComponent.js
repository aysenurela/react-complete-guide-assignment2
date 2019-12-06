import React from 'react';

class ValidationComponent extends React.Component {
    // constructor(){
    //     super(props)
    // }

    validateLength (len) {
      return len>5 ? 'Text long enough' : 'Text too short'
    }

    render() {
        const {props:{controlLength=''}={}} = this

        return (
            <div>
                {this.validateLength(controlLength)}
            </div>
        )
    }
}

export default ValidationComponent