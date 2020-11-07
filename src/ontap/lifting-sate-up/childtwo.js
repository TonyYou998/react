import React, { Component } from 'react'

export default class ChildTwo extends Component {
    render() {
        return (
            <div>
                <h3>childtwo</h3>
                <p>username:{this.props.username}</p>
            </div>
        )
    }
}
