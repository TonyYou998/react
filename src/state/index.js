import React, { Component } from 'react'

export default class State extends Component {
    constructor(prop) {
        // ke thua tu cha xsuong
        super(prop);
        this.state = {
            username: "tan",
            islogin: false,
        }
    }

    handleLogin = () => {
        // do bất đồng bộ nên phải bỏ vào callback
        // cap nhat lai state only option
        this.setState({
            islogin: true,
        }, () => {
            console.log(this.state.islogin);
        });
        // console.log(this.state.islogin);
    }
    // handleLogin() {
    //     this.state({
    //         islogin: true,
    //     });
    //     this.handleLogin = this.handleLogin.bind(this);
    // }
    renderHTML = () => {
        // if (this.islogin) {
        //     return <p>hello {this.username}</p>
        // }
        // else {
        //     return <button className="btn btn-success" onClick={this.handleLogin}>login</button>
        // }
        // phai retunr 
        // return (
        //     <div>
        //         <p>hello {this.username}</p>
        //         <button className="btn btn-success">login</button>
        //     </div>
        // )
        return this.state.islogin ? <p>hello {this.state.username}</p> : <button className="btn btn-success" onClick={this.handleLogin}  >login</button>


    }
    // state thay đổi thì render chạy lại
    // hàm set state là hàm bất đồng bộ
    render() {
        console.log("render");
        return (
            <div>
                {this.renderHTML()}
            </div>
        )
    }
}
