import React, {useState} from 'react';
import Tree from "rc-tree/lib/Tree";
import PropTypes from "prop-types";
import 'rc-tree/assets/index.css'
import {handleTreeDrop} from "../utils/CommonUtils";

function DSortableTree(props) {
  const [treeData,setTreeData] = useState(props.treeData)

  const style = { border: '1px solid #000', minHeight:props.height}

  const allowDrop = (allProps) =>{
    console.log('allowDrop',allProps)
    //{ dropNode, dropPosition }

    return true


  }

  const onDragStart = (a,b,c) =>{
    console.log('onDragStart')
  }

  const onDrop = (info) =>{
    console.log('onDrop',info)
    handleTreeDrop(info,treeData,setTreeData)
  }

  return (
    <Tree
      treeData={treeData}
      style={style}
      height={props.height}
      defaultExpandAll={true}
      // allowDrop={allowDrop}
      draggable={true}
      // draggable={{
      //   icon: '↕️',
      // }}
      // onDragStart={onDragStart}
      onDrop={onDrop}
    />
  );
}

DSortableTree.defaultProps ={
  treeData : [],
  height:"200px"
}

DSortableTree.propTypes ={
  treeData : PropTypes.array,
  height: PropTypes.string,
}


export default DSortableTree;