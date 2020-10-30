import React, { Component } from 'react'

export default class HandlingEvent extends Component {
    handleClick = () => {
        console.log("100");
    }
    handleClickParam = (name, lop) => {
        console.log(name, lop);
    }
    render() {
        return (
            <div>
                <h1>handling event</h1>
                {/* click vao nut goi ham ko co dau () */}
                <button className="btn btn-success" onClick={this.handleClick}>click</button>
                {/* cach goi ham co param */}
                <button className="btn btn-info" onClick={() => { this.handleClickParam("tan", ".2") }}>click param</button>
                {/* cach viet tat co param */}
                <button className="btn btn-danger" onClick={() => { console.log("demo") }}>click</button>
            </div>
        )
    }
}
