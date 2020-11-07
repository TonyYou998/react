import React, { Component } from 'react'

export default class ExampleCar extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            img: "./img/imgRedCar.jpg",
        }
    }
    handleCar = (img) => {
        console.log(img);
        this.setState({
            img,
        })
    }

    render() {
        const { img } = this.state;
        return (
            <div>
                <img src={img} className="img-fluid" alt="" className="col-sm-6" />
                <button className="btn btn-info" onClick={() => { this.handleCar("./img/imgRedCar.jpg"); }}>red</button>
                <button className="btn btn-info" onClick={() => { this.handleCar("./img/imgSilverCar.jpg") }}>silver</button>
                <button className="btn btn-danger" onClick={() => {
                    this.handleCar("./img/imgBlackCar.jpg");
                }}>black</button>
            </div>
        )
    }
}
