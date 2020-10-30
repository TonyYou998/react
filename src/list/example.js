import React, { Component } from 'react'
import Itemcard from '../baitap2/itemcard';

export default class ExampleListKey extends Component {
    renderTable = () => {
        const { listSP } = this.state;
        return listSP.map((item) => {
            return (


                <tr>
                    <td> {item.id}</td>
                    <td>{item.tenSP}</td>
                    <td>{item.gia}</td>
                </tr>
            )
        });
    };
    constructor(prop) {
        super(prop);
        this.state = {
            listSP: [
                { id: 1, tenSP: "samsung", gia: 5000 },
                { id: 2, tenSP: "apple", gia: 6000 },
                { id: 3, tenSP: "mi", gia: 5000 },
            ]
        }

    }
    render() {

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ma sp</th>
                            <th>ten sp</th>
                            <th>gia tien</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderTable()}</tbody>
                </table>
            </div>
        )
    }
}
