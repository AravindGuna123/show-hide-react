// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    first: true,
    second: true,
  }

  firstName = firstValue => {
    const {first} = {
      first: firstValue,
    }
    if (first === true) {
      this.setState(prevState => ({
        first: false,
      }))
      return <p className="card">Joe</p>
    }
    return null
  }

  lastName = secondValue => {
    const {second} = {
      second: secondValue,
    }
    if (second === true) {
      this.setState(prevState => ({
        second: false,
      }))
      return <p className="card">Jones</p>
    }
    return null
  }

  render() {
    const {first, second} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.firstName(first)}
          >
            Show/Hide Firstname
          </button>
          <button
            type="button"
            className="button"
            onClick={this.lastName(second)}
          >
            Show/Hide Lastname
          </button>
        </div>
      </div>
    )
  }
}

export default ShowHide
