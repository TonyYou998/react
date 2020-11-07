import React, { Component } from 'react'

export default class ClassProps extends Component {

    render() {

        return (
            <div>
                <h3>classProps</h3>
                <p>username:{this.props.username}-lop:{this.props.lop}</p>

            </div>
        )
    }
}
