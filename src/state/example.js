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
        });
    }
    render() {
        const { img } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6" >
                        <img src={img} className="img-fluid" />

                    </div>
                    <div ></div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger mr-3" onClick={() => {
                            this.handleCar("./img/imgRedCar.jpg");
                        }}>red</button>
                        <button className="btn btn-light mr-3" onClick={() => {
                            this.handleCar("./img/imgSilverCar.jpg");
                        }}>silver</button>
                        <button className="btn btn-dark mr-3" onClick={() => {
                            this.handleCar("./img/imgBlackCar.jpg");
                        }}>black</button>



                    </div>
                </div>
            </div>
        )
    }
}
