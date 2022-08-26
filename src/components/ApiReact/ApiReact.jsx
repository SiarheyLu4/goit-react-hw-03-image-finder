import React, { Component } from "react";

const URL = "https://pixabay.com/api/";
const KEY = "28282273-de260e28427aa1fd2a8294f86"


export class ApiReact extends Component {
    
  state = {
    error: null,
    isLoaded: false,
    items: []
  };
  
  // https://pixabay.com/api/ ? q=cat &page=1 &key=your_key &image_type=photo &orientation=horizontal &per_page=12


  componentDidMount() {
    fetch(`${URL}?key=${KEY}&q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.hits
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    // console.log(this.state);
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <img src={item.webformatURL} alt={item.tags} />
            </li>
          ))}
        </ul>
      );
    }
  }
}