import React from 'react';
import DefaultCheckTree from "./DefaultCheckTree";
import {Route,Routes} from "react-router-dom";
import DropDownTree from "./DropDownTree";
import FilterTreeApp from "./FilterTreeApp";
import ManageTreeApp from "./ManageTreeApp";
import SortableTreeApp from "./SortableTreeApp";


const Apps = () =>{
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultCheckTree />} />
        <Route path={"/dd"} element={<DropDownTree/>} />
        <Route path={"/filter"} element={<FilterTreeApp/>} />
        <Route path={"/manage"} element={<ManageTreeApp/>} />
        <Route path={"/sortable"} element={<SortableTreeApp/>} />
      </Routes>
    </>
  )
}

export default Apps;