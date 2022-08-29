import { ImageGallery } from "components/ImageGallery/ImageGallery";
import React, { Component } from "react";
// import { Notify } from 'notiflix';


const URL = "https://pixabay.com/api/";
const KEY = "28282273-de260e28427aa1fd2a8294f86"



export class ImagesInfo extends Component {

  state = {
    images: [],
    page: 1,
    // loading: false,
    error: null,
    status: 'idle',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.onQuery !== this.props.onQuery) {
      // console.log('prevProps.onQuery ', prevProps.onQuery);
      // console.log('this.props.onQuery', this.props.onQuery);
      this.setState({ status: 'pending' });

      setTimeout(() => {
        fetch(`${URL}?key=${KEY}&q=${this.props.onQuery}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=12`)
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
              return this.setState({ status: 'rejected', images: [] });
            }
              return this.setState({images: result.hits, status: 'resolved'});
          })
          .catch(error => this.setState({ error, status: 'rejected' }))
      }, 1000);
    }
  }


  // 'idle', простой
// 'pending' ожидание,
//   'resolved' выполнено с резудьтатомб
// 'rejected' отклонено

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return <h2>Enter keyword</h2>
    }

    if (status === 'pending') {
      return <h2>Loading...</h2>
    }

    if (status === 'rejected') {
      return <h2>Image not found!</h2>
    }

    if (status === 'resolved') {
      return <ImageGallery images={images} />
    }

    return (
      <>
        
        {/* {error && <h2>Image not found!</h2>}

        {loading && <h2>Loading...</h2>}

        {!this.props.onQuery && <h2>Enter keyword</h2>}

        {images && (<ul>
          {images.map(item => (
            <li key={item.id}>
              <img src={item.webformatURL} alt={item.tags} />
            </li>
          ))}
        </ul>)} */}

      </>
    )
  }
}