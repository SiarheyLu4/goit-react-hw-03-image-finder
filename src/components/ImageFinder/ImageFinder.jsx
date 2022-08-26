import React, { Component } from "react";
// import styled from "styled-components";

// import { Modal } from "../Modal/Modal";
import { ApiReact } from "components/ApiReact/ApiReact";
import { Searchbar } from "components/Searchbar/Searchbar";
import styled from "styled-components";

export class ImageFinder extends Component {
  render () {
    return (
      <Card>
        <Searchbar/>
        <ApiReact/>
        {/* <Modal/> */}
      </Card>
    );
  }
}

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`