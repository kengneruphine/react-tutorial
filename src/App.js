import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    //creating a state object and it should contain properties of everything needed to be store in the state
    state = {
        characters: [
      ],
    }
    
    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSummit = character => {
    this.setState({characters: [...this.state.characters, character]})
    }
    render() {
      const { characters}= this.state
        return (  // passing data to the child component(Table)
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSummit={this.handleSummit}/>
            </div>
        )
    }
}

export default App