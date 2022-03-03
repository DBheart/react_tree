import React from 'react';
import {treeData} from "./tree_data_json";
import DSortableTree from "../components/DSortableTree";

function SortableTreeApp(props) {
  return (
    <div>
      <div style={{display:"flex"}}>
        <button>+</button>
        <button>-</button>
        <button>U</button>
      </div>
      <DSortableTree
        treeData={treeData}
      />
    </div>
  );
}

export default SortableTreeApp;