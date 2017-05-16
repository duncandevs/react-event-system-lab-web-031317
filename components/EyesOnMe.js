import React from 'react'
class EyesOnMe extends React.Component {
  focus(){
    console.log("Good!")
  }
  blur(){
    console.log("Hey! Eyes on me!")
  }
  render(){
    return (
      <button onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)}>Focus</button>
    )
  }
}
export default EyesOnMe
