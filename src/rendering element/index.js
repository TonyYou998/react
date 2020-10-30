import React, { Component } from 'react'

export default class RenderingElement extends Component {
    username = "motherfucker";
    lop = "52e";
    renderInfo = () => {
        return <p>user:{this.username} lop:{this.lop}</p>
    }
    render() {
        return (
            <div>
                <h3>đâsdas</h3>
                {/* <p>{this.tenbien}</p> render chu*/}
                {/* <p>{this.username}-lop{this.lop}</p> */}
                {this.renderInfo()}

            </div>
        )
    }
}
