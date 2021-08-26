import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, props }) {
  const user = {
    firstName: props.firstName,
    lastName: props.lastName,
    email: props.email,
    contact: props.contact
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Employee Details</h1>
        </div>
        <div className="body">
          <p>First Name: {props.firstName}</p>
          <p>Last Name: {props.lastName}</p>
          <p>Email: {props.email}</p>
          <p>Contact: {props.contact}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false); localStorage.setItem('User', user);
            }}
            id="cancelBtn"
          >
            okay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
