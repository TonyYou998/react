import React, { Component } from 'react'

export default class ExampleHandlingEvent extends Component {
    username = "tan";
    islogin = false;
    handleLogin = () => {
        console.log(this.islogin);
        this.islogin = true;
        console.log(this.islogin);
    }
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
        return this.islogin ? <p>hello {this.username}</p> : <button className="btn btn-success" onClick={this.handleLogin}  >login</button>


    }
    render() {
        return (
            <div>
                
                {this.renderHTML()}
            </div>
        )
    }
}
