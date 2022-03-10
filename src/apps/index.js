import React from 'react';
import DefaultTreeApp from "./DefaultTreeApp";
import {Route,Routes} from "react-router-dom";
import DropDownTreeApp from "./DropDownTreeApp";
import FilterTreeApp from "./FilterTreeApp";
import ManageTreeApp from "./ManageTreeApp";
import SortableTreeApp from "./SortableTreeApp";
import CheckTreeApp from "./CheckTreeApp";
import MainApp from "./MainApp";


const Apps = () =>{
  return (
    <>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/default" element={<DefaultTreeApp />} />
        <Route path={"/dd"} element={<DropDownTreeApp/>} />
        <Route path={"/filter"} element={<FilterTreeApp/>} />
        <Route path={"/manage"} element={<ManageTreeApp/>} />
        <Route path={"/sortable"} element={<SortableTreeApp/>} />
        <Route path={"/check"} element={<CheckTreeApp/>} />
      </Routes>
    </>
  )
}

export default Apps;