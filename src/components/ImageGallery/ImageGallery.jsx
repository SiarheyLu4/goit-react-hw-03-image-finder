import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import React from "react";

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({id, webformatURL, tags}) => (
        <ImageGalleryItem
          id={id}
          webformatURL={webformatURL}
          tags={tags} />
      ))}
    </ul>
  )
}