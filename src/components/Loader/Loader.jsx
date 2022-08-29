import React from "react";
import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <h2>Loading...</h2>
      <Bars
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  )
}
