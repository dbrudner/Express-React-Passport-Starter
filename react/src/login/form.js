import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        axios.get('/test').then(res => {
            console.log(res)
        })
    }

    handleChange = (name, value) => {
        this.setState({[name]: value}, () => {
            console.log(this.state)
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const email = this.state.username.trim()
        const password = this.state.password.trim()

        axios.post('/login', {
            email, password
        })
        .then((res) => {
            console.log(res)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.username} type='text' onChange={event => {this.handleChange('username', event.target.value)}}/>
                <input value={this.state.password} type='password' onChange={event => {this.handleChange('password', event.target.value)}}/>
                <button type='submit'>Button</button>
            </form>
        )
    }
}