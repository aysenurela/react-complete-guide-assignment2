import React from 'react';
import ValidationComponent from '../src/validationComponent'
import CharComponent from './charComponent';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:'',
      text:''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleRemoveLetter=this.handleRemoveLetter.bind(this)
  }

  handleChange(event) {
    const {
      target:{
        value=''
      } = {}
    } = event

    this.setState({
      text: value, 
      value: value.length
    })
  }

  handleRemoveLetter(index) {
    const {
      state:{
        text
      } = {}
    } = this

    let _text = text
    let letters = _text.split('')
    letters.splice(index,1)
    letters=letters.join('')

    this.setState({
      text: letters,
      value: letters.length
    })
  }

  displayLetters(text) {
    let _text = text
    let letters = _text.split('')

    return (
      letters.map((letter, index) => {
        return (
        <CharComponent 
          key={index} 
          letter={letter} 
          index={index} 
          handleRemoveLetter={this.handleRemoveLetter}
        />)
      })
    )
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange= {this.handleChange}
          value={this.state.text}
        />
        <p>{this.state.value}</p>
        <ValidationComponent controlLength={this.state.value}/>
        {this.displayLetters(this.state.text)}
      </div>
    )
  }
}

export default App;
