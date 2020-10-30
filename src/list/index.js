import React, { Component } from 'react'

export default class ListKey extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            listPeople: [
                { ten: "a", tuoi: 15 },
                { ten: "b", tuoi: 19 },
                { ten: "c", tuoi: 29 },



            ],
        };
    }
    renderInfo = () => {
        const { listPeople } = this.state;
        return listPeople.map((item, index) => {
            // return cuar ca render
            return (
                <li key={index}>
                    ten:{item.ten} tuoi:{item.tuoi}
                    {/* return cua ham map */}
                </li>
            );
        });
    };
    render() {
        return (
            <div>

                <ul>{this.renderInfo()}</ul>
            </div>
        )
    }
}
