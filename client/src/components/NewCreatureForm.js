import React, { Component } from 'react'
import axios from 'axios'

class NewCreatureForm extends Component {
  state = {
    newCreature: {
      name: '',
      description: '',
    },
    newCreatureId: ''
  }




  handleChange = (event) => {
    const attr = event.target.name
    const newState = {...this.state.newCreature}
    newState[attr] = event.target.value
    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const payload = {
      name: this.state.name,
      description: this.state.description
    }
    await axios.post('/api/creatures', payload)
    await this.props.getAllCreatures()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input onChange={this.handleChange} type="text" name="name" placeholder="Name" value={this.state.name}/>
        </div>
        <div>
          <input onChange={this.handleChange} type="text" name="description"
          placeholder="Description" value={this.state.description}/>
        </div>
        <button>Submit</button>
      </form>
    )
  }
}

export default NewCreatureForm