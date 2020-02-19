import React, { Component } from 'react'

class Form extends Component{
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            job:'',
        }
        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target
        
        this.setState({
            [name] : value,
    })
    }

    submitForm = () => {
        this.props.handleSummit(this.state)
        this.setState(this.initialState)  //clear the form after submitting
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
            <h5>Add New Character</h5>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />
                <lable for="job">Job</lable>
                <input type="text" name="job" id="job" value={job} onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm}/>
            </form>
        );
    }
}

export default Form;