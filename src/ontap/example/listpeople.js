import React, { Component } from 'react'

export default class ListPeople extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            listPeople: [
                { ten: "a", tuoi: 10 },
                { ten: "b", tuoi: 15 },
                { ten: "c", tuoi: 20 },
            ]
        }
    }
    // renderHTML = () => {
    //     const { listPeople } = this.state;
    //     return listPeople.map((item, index) => {
    //         return (
    //             <li key={index}>
    //                 ten:{item.ten}
    //                 tuoi:{item.tuoi}
    //             </li>
    //         )
    //     });
    // }
    // render() {
    //     return (
    //         <div>

    //             {this.renderHTML()}
    //         </div>
    //     )
    // }
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
