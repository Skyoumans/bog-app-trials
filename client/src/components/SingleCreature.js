import React, { Component } from 'react';

import axios from 'axios'


class SingleCreature extends Component {

  state = {
    creature: {
      name: '',
      descrption: ''
    }
  }

  componentWillMount() {
    this.fetchCreatureData()
  }

  fetchCreatureData = async (id) => {
    try {
      const creatureId = this.props.match.params.id      
      const res = await axios.get(`api/creatures/${creatureId}`)
      this.setState({ creature: res.data})
    } catch (error) {
      console.log(error)
    }
  }

  handleUpdate = async () => {
    const { id } = this.props.match.parms
    const res = await axios.patch(`api/creatures/${id}`, {
      creature: this.state.creature
    })
    }

  handleChange = (event) => {
    const attr = event.target.name
    const updateCreature = {...this.state.creature}
    updateCreature[attr] = event.target.value
    this.setState({ post: updateCreature })
  }


  render() {
    return (
      <div>
        <div>
        <h1>{this.state.creature.name}</h1>
        <h3>{this.state.creature.description}</h3>
        </div>
      </div>
    );
  }
}

export default SingleCreature;