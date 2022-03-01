import React from 'react';
import DefaultCheckTree from "./DefaultCheckTree";
import {Route,Routes} from "react-router-dom";


const Apps = () =>{
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultCheckTree />} />
      </Routes>
    </>
  )

}

export default Apps;