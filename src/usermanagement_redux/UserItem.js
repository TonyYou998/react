import React, { Component } from "react";
import { connect } from "react-redux";
class UserItem extends Component {
  render() {
    const { user } = this.props;
    console.log(this.props);
    console.log(user);
    return (

      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              // this.props.getUserEdit(user);
              this.props.editUser(user);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              // this.props.delete(user);
              this.props.deleteUser(user);

            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
const mapDisPatchToProps = (dispatch) => {
  return {
    deleteUser: (user) => {
      const action = {
        type: "DELETE",//action kiểu delele
        payload: user,//du lieu gui di user
      }
      dispatch(action);//gửi đi obj action 
    },
    editUser: (user) => {
      const action = {
        type: "EDIT_USER",//action kieu edit user
        payload: user,  //du lieu gui di la user

      }
      dispatch(action)//gửi đi obj action
    }
  }
}
export default connect(null, mapDisPatchToProps)(UserItem);

