import React, { Component } from 'react'

export default class DemoProps extends Component {

    render() {
        return (
            <div>
                <p>hello {this.props.hello}</p>
            </div>
        )
    }
}
