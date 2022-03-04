import React from 'react';
import {treeData} from "./tree_data_json";
import DFilterTree from "../components/DFilterTree";

function FilterTreeApp(props) {

  return (
    <div>
      <DFilterTree treeData={treeData}/>
    </div>
  );
}

export default FilterTreeApp;