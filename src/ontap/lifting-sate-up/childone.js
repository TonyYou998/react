import React, { Component } from 'react'

export default class ChildOne extends Component {
    handleReset = () => {
        console.log("run");
        this.props.resetUsername("bell");
    }
    render() {
        return (
            <div>
                <h3>*ChildOne</h3>
                <p>username:{this.props.username}</p>
                <button className="btn btn-danger" onclick={this.handleReset}>reset</button>

            </div>
        )
    }
}
