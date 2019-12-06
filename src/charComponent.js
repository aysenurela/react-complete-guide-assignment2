import React from 'react'
import '../src/charStyle.css'

class CharComponent extends React.Component{
    constructor(props){
        super(props)
    }

    handleRemoveChar(letter, index) {
        const { props: {handleRemoveLetter=()=>{} } = {} } = this
        handleRemoveLetter(letter,index)
    }

    render () {
        const {props:{letter='', index=''}={}} = this
        return (
            <div className='charComponentContainer'
                onClick={this.handleRemoveChar.bind(this,letter,index)}
            >
                {letter}
            </div>
        )
    }
}

export default CharComponent