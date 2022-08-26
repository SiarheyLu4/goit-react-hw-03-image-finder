import React, { Component } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const selectedModal = document.querySelector('#modal');

export class Modal extends Component {
  element = document.createElement('div');

  componentDidMount() {
    selectedModal.appendChild(this.element);
  };

  componentWillUnmount() {
    selectedModal.removeChild(this.element);
  }

  renderContent = () => (
    <Overlay onClick={this.props.onClose}>
      <ModalCard/>
    </Overlay>
  )

  render() {
    return createPortal (this.renderContent(), this.element)
  }
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`

const ModalCard = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  width: 200px;
  height: 200px;
  background-color: white;
`