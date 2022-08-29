import React, { Component } from "react";
import { Notify } from 'notiflix';


const URL = "https://pixabay.com/api/";
const KEY = "28282273-de260e28427aa1fd2a8294f86"

export class ImagesInfo extends Component {

  state = {
    images: [],
    page: 1,
    loading: false,
    error: null,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.onQuery !== this.props.onQuery) {
      // console.log('prevProps.onQuery ', prevProps.onQuery);
      // console.log('this.props.onQuery', this.props.onQuery);
      this.setState({ loading: true, images: null });

      setTimeout(() => {
        fetch(`${URL}?key=${KEY}&q=${this.props.onQuery}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=12`)
          // .then(res => res.json())
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error('Image not found!!!')
            );
          })
          .then(result => {
            if (result.total === 0) {
              // Notify.warning('Image not found', { position: "center-top"});
              return this.setState({ error: true, images: [] });
            }
              return this.setState({images: result.hits, error: false});
          })
          .catch(error => this.setState({ error }))
          .finally(() => this.setState({ loading: false }))
      }, 1000);
    }
  }

  render() {
    const { error, loading, images} = this.state;

    return (
      <>
        
        {error && <h2>Image not found!</h2>}

        {loading && <h2>Loading...</h2>}

        {!this.props.onQuery && <h2>Enter keyword</h2>}

        {images && (<ul>
          {images.map(item => (
            <li key={item.id}>
              <img src={item.webformatURL} alt={item.tags} />
            </li>
          ))}
        </ul>)}

      </>
    )
  }
}