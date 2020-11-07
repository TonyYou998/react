import { Button } from 'bootstrap';
import React, { Component } from 'react'

export default class Index extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            username: "tan",
            islogin: false,
        }
    }
    handlelogin = () => {
        this.setState({
            islogin: true,
        });
    }
    renderHTML = () => {
        return this.state.islogin ? <p>hello {this.state.username}</p> : <button className="btn btn-info" onClick={this.handlelogin}>login</button>
    }
    render() {
        return (
            <div>
                {this.renderHTML()}
            </div>
        )
    }
}
