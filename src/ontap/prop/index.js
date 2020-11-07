import React, { Component } from 'react'
import ClassProps from "./classProps";
import FunctionProps from "./functionProp";
import ChildrenProps from "./childrenProps";
import FunctionProp from './functionProp';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "tan",
            lop: "ATCL",
        }
    }
    handleChangeInfo = () => {
        console.log("run");
        this.setState(
            {
                username: "cybersoft",
                lop: "52E",
            }
        );
    }
    render() {
        return (
            <div>
                <h3>props</h3>
                <p>
                    username:{this.state.username}-lop:{this.state.lop}

                </p>
                <button className="btn btn-info" onClick={this.handleChangeInfo}>change</button>
                <ClassProps username={this.state.username} lop={this.state.lop} />
                <FunctionProp username={this.state.username} lop={this.state.lop} />
                <ChildrenProps>
                    <div>
                        <h5>demo abc</h5>
                        <p>username:{this.state.username}</p>
                        <p>lop:{this.state.lop}</p>
                    </div>
                </ChildrenProps>
                <ChildrenProps username={this.state.username} />
            </div>
        )
    }
}
