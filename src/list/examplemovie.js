import React, { Component } from 'react'
import data from "./data.json";

export default class ExampleMovie extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            listMovie: data,
        };

    }
    renderHTML = () => {
        const { listMovie } = this.state;
        return listMovie.map((item, index) => {
            return (
                <div key={item.maPhim} className="col-sm-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={item.hinhAnh} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>






            )
        });
    }
    render() {

        return (
            <div className="row">
                {this.renderHTML()}
            </div>
        )
    }
}
