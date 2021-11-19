import React, { Component } from "react";
import "./Modal.scss";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-box">
        <header className="modal-header">
          <button
            type="button"
            className="modal-close"
            onClick={handleClose}
            aria-label="Close"
          >
            <span className="modal-close--cross" aria-hidden="true">
              &times;
            </span>
          </button>
        </header>
        <div className="modal-main">
          <h1 className="modal-main__header">Delete King West warehouse?</h1>
          <p className="modal-main__text">
            On a monthly basis how much do you want to invest?
          </p>
        </div>
        <footer className="modal-footer">
          <button
            className="modal-button--cancel"
            type="button"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button className="modal-button--delete" type="button">
            Next
          </button>
        </footer>
      </section>
    </div>
  );
};
export default Modal;
