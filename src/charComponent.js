import React from 'react'
import '../src/charStyle.css'

class CharComponent extends React.Component{

    handleRemoveChar(index) {
        const { 
            props: {
                handleRemoveLetter = ()=>{} 
            } = {} 
        } = this

        handleRemoveLetter(index)
    }

    render () {
        const {
            props:{
                letter='', 
                index=''
            } = {}
        } = this
        
        return (
            <div 
                className='charComponentContainer'
                onClick={this.handleRemoveChar.bind(this,index)}
            >
                {letter}
            </div>
        )
    }
}

export default CharComponent