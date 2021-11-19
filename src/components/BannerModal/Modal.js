import React, { Component } from "react";
import "./Modal.scss";
import modalOne from "../../assets/images/Modal-1.png";

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
        {/* <div className="modal-main"> */}
        {/* <h1 className="modal-main__header">
            What are your goals for trading?
          </h1>
          <p className="modal-main__text"></p>
          <label class="container">
            Diversify my investments
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Learn about crypto
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Retire earlier
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Futureproof my income
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Generate passive income
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Stroke my passion for trading
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
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
        </footer> */}
        <img src={modalOne} alt="" />
      </section>
    </div>
  );
};
export default Modal;
