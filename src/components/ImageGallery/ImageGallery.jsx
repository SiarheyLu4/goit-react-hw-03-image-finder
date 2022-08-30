import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <Ul>
      {images.map(({id, webformatURL, tags}) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags} />
      ))}
    </Ul>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  )
}

const Ul = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`