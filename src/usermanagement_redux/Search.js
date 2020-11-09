import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={(element) => {

          this.props.search(element.target.value);
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (keyword) => {
      const action = {
        type: "SEARCH",
        payload: keyword,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
