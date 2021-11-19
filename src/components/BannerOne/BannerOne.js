import "./BannerOne.scss";
import React, { Component } from "react";
import Modal from "../BannerModal/Modal";
import cardImgThree from "../../assets/images/moneyverse_leaning.png";
import cardImgOne from "../../assets/images/moneyverse_sitting.png";
import cardImgTwo from "../../assets/images/moneyverse_standing.png";

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
            <div className="banner-one__card-title-container">
              <h1 className="banner-one__card-title">Beginner Trader</h1>
            </div>

            <div className="banner-one__card-subtitle-container">
              <img
                src={cardImgOne}
                alt="card figures"
                className="banner-one__card-image"
              />
              <p className="banner-one__card-subtitle">I'm new here!</p>
            </div>
          </div>

          <div
            className="banner-one__card deleteModal__button"
            onClick={this.showModal}
          >
            <div className="banner-one__card-title-container">
              <h1 className="banner-one__card-title">Novice Crypto Trader</h1>
            </div>

            <div className="banner-one__card-subtitle-container">
              <img
                src={cardImgTwo}
                alt="card figures"
                className="banner-one__card-image"
              />
              <p className="banner-one__card-subtitle">I know a little.</p>
            </div>
          </div>

          <div
            className="banner-one__card deleteModal__button"
            onClick={this.showModal}
          >
            <div className="banner-one__card-title-container">
              <h1 className="banner-one__card-title">Advanced Crypto Trader</h1>
            </div>

            <div className="banner-one__card-subtitle-container">
              <img
                src={cardImgThree}
                alt="card figures"
                className="banner-one__card-image"
              />
              <p className="banner-one__card-subtitle">Don't @ me.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
