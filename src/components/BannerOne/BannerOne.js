import "./BannerOne.scss";
import React, { Component } from "react";
import Modal from "../BannerModal/Modal";

export default class BannerOne extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="banner-one">
        <h1 className="banner-one__title">Let's get to know each other</h1>
        <p className="banner-one__text">
          Answer a couple of questions, and we'll give you a plan curated to
          your personal journey into crypto.
        </p>

        <div className="banner-one__container">
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>Modal c</p>
          </Modal>
          <div
            className="banner-one__card deleteModal__button"
            onClick={this.showModal}
          >
            <h1 className="banner-one__card-title">Beginner Trader</h1>
            <p className="banner-one__card-subtitle">I'm new here!</p>
          </div>
          <div className="banner-one__card" onClick={this.showModal}>
            <h1 className="banner-one__card-title">Intermediate Trader</h1>
            <p className="banner-one__card-subtitle">I know a little.</p>
          </div>
          <div className="banner-one__card" onClick={this.showModal}>
            <h1 className="banner-one__card-title">Advanced Trader</h1>
            <p className="banner-one__card-subtitle">Don't @ me</p>
          </div>
        </div>
      </div>
    );
  }
}
