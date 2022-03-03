import React from 'react';
import Tree from "rc-tree/lib/Tree";
import PropTypes from "prop-types";
import 'rc-tree/assets/index.css'

function DHeightTree(props) {

  const style = { border: '1px solid #000', minHeight:props.height}

  return (
    <Tree
      treeData={props.treeData}
      style={style}
      height={props.height}
      defaultExpandAll={true}
    />
  );
}

DHeightTree.defaultProps ={
  treeData : [],
  height:"200px"
}

DHeightTree.propTypes ={
  treeData : PropTypes.array,
  height: PropTypes.string,
}


export default DHeightTree;