import React from "react";

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(item => (
        <li key={item.id}>
          <img src={item.webformatURL} alt={item.tags} />
        </li>
      ))}
    </ul>
  )
}