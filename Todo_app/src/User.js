import React from "react";
import "./user.css";

function User(props) {
  return (
    <img
      src={props.currentUser.avatar}
      className="mb-5 rounded"
      alt={props.currentUser.first_name}
      onClick={()=>props.handleClick(props.currentUser)}
    />
  );
}

export default User;
