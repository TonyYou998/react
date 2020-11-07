import React, { Component } from 'react';

export default class Example extends Component {
    renderTable = () => {
        const { listTable } = this.state;
        return listTable.map((item) => {
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.tenSP}</td>
                    <td>{item.gia}</td>
                </tr>
            );
        });
    }

    constructor(prop) {
        super(prop);
        this.state = {
            listTable: [
                { id: 1, tenSP: "a", gia: 12 },
                { id: 2, tenSP: "b", gia: 120 },
                { id: 3, tenSP: "c", gia: 1200 },
            ]
        }
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>ten</th>
                            <th>gia</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderTable()}</tbody>
                </table>
            </div>
        )
    }
}
