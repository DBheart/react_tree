import React from 'react';
import DHeightTree from "../components/DHeightTree";
import {treeData} from "./tree_data_json";

function ManageTreeApp(props) {
  return (
    <div>
      <div style={{display:"flex"}}>
        <button>+</button>
        <button>-</button>
        <button>U</button>
      </div>
      <DHeightTree treeData={treeData}/>
    </div>
  );
}

export default ManageTreeApp;