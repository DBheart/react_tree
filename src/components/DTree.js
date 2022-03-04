import React from 'react';
import Tree from "rc-tree/lib/Tree";
import 'rc-tree/assets/index.css'


function DTree({treeData}) {
  return (
    <Tree
      treeData={treeData}
      showLine={true}
    />
  );
}

export default DTree;