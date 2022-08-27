import React, { Component } from "react";
import styled from "styled-components";

// import { Modal } from "../Modal/Modal";
// import { ApiReact } from "components/ApiReact/ApiReact";
import { Searchbar } from "components/Searchbar/Searchbar";


const URL = "https://pixabay.com/api/";
const KEY = "28282273-de260e28427aa1fd2a8294f86"

export class ImageFinder extends Component {

  state = {
    query: '',
    error: null,
    loading: false,
    images: [],
    page: 1
  }

  onSubmit = (query) => {
    this.setState({query, images: [], page: 1})
  }

  componentDidMount() {

    this.setState({loading: true})

    setTimeout(() => {
      fetch(`${URL}?key=${KEY}&q=${this.state.query}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({images: result.hits});
        },
        // (error) => {
        //   this.setState({
        //     loading: false,
        //     error
        //   });
        // }
      )
      .finally(() => this.setState({ loading: false }))
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ images: [], page: 1 });
      this.componentDidMount();
    }
  }

  render() {
    
    const { images } = this.state;

    return (
      
      <Card>
        <Searchbar onSubmit={this.onSubmit} />

        {this.state.loading && <p>Loading...</p>}

        {this.state.query && (<ul>
          {images.map(item => (
            <li key={item.id}>
              <img src={item.webformatURL} alt={item.tags} />
            </li>
          ))}
        </ul>)}


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