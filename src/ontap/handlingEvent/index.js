import React, { Component } from 'react'

export default class Index extends Component {
    username = "tan";
    islogin = false;
    handleLogin = () => {
        console.log(this.islogin);
        this.islogin = true;
        console.log(this.islogin);
    }
    renderHTML = () => {
        return this.islogin ? <p>hello {this.username}</p> : <button className="btn btn-danger" onClick={this.handleLogin}>click</button>
    }
    render() {
        return (
            <div>
                {this.renderHTML()}
            </div>
        )
    }
}
