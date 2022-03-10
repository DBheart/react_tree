import React, {useState} from 'react';
import Tree from "rc-tree/lib/Tree";
import PropTypes from "prop-types";
import 'rc-tree/assets/index.css'
import {handleTreeDrop, treeDropData} from "../utils/CommonUtils";

/**
 * 드래그하여 순서를 변경하기 위해서는 아래의 값을 수정해야한다.
 * - parent_id:옮긴 부모의 값, depth : 깊이, seq : 순서
 * - 관련된 많은 값을 수정해야하므로 데이터가 엄청 많은 트리는 drag를 사용하지 말 것
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function DSortableTree(props) {
  const [treeData,setTreeData] = useState(props.treeData)

  const style = { border: '1px solid #000', minHeight:props.height}

  // const allowDrop = (allProps) =>{
  //   console.log('allowDrop',allProps)
  //   //{ dropNode, dropPosition }
  //
  //   return true
  //
  //
  // }
  //
  // const onDragStart = (a,b,c) =>{
  //   console.log('onDragStart')
  // }


  const onDrop = (info) =>{
    console.log('onDrop',info)
    // handleTreeDrop(info,treeData,setTreeData)
    const {changeList, dropData, friendList} = treeDropData(info,treeData)
    setTreeData(changeList)

    //dropData는 자식의 depth를 변경하기 위해서 필요하다
    //friendList는 seq를 변경하는 리스트이다. 순서대로 seq를 넣으면 된다.

  }

  return (
    <Tree
      treeData={treeData}
      showLine={true}
      style={style}
      height={props.height}
      defaultExpandAll={true}
      draggable={true}
      onDrop={onDrop}
      // allowDrop={allowDrop}
      // draggable={{
      //   icon: '↕️',
      // }}
      // onDragStart={onDragStart}

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