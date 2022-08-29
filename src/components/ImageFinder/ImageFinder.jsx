import React, { Component } from "react";
import styled from "styled-components";

// import { Modal } from "../Modal/Modal";
// import { ApiReact } from "components/ApiReact/ApiReact";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImagesInfo } from "components/ImagesInfo/ImagesInfo";


// const URL = "https://pixabay.com/api/";
// const KEY = "28282273-de260e28427aa1fd2a8294f86"

export class ImageFinder extends Component {

  state = {
    query: '',
    // page: 1,
    // error: null,
    // loading: false,
    // images: [],
    
  }

  handleFormSubmit = (query) => {
    this.setState({query, }) // images: [], page: 1
  }

  

  render() {
    
    // const { images } = this.state;

    return (
      
      <Card>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImagesInfo onQuery={this.state.query} />

        {/* {this.state.loading && <p>Loading...</p>} */}

        {/* {this.state.query && (<ul>
          {images.map(item => (
            <li key={item.id}>
              <img src={item.webformatURL} alt={item.tags} />
            </li>
          ))}
        </ul>)} */}


        {/* <ul>
          {images.map(item => (
            <li key={item.id}>
              <img src={item.webformatURL} alt={item.tags} />
            </li>
          ))}
        </ul> */}


        {/* <ApiReact/> */}
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