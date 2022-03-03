import React from 'react';
import DTree from "../components/DTree";
import {treeData} from "./tree_data_json";


function FilterTreeApp(props) {
  return (
    <div>
      <input/>
      <DTree treeData={treeData} />
    </div>
  );
}

export default FilterTreeApp;