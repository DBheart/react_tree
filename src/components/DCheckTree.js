import React, {forwardRef, useRef} from 'react';
import Tree from "rc-tree/lib/Tree";
import 'rc-tree/assets/index.css'

/**
 *
 * @param props : {treeData : 트리에 사용할 데이터, checkStrictly : 하위리스트도 자동체크할 것인지 선택한다.}
 * @param ref : 체크한리스트
 * @returns {JSX.Element}
 * @constructor
 * 노드를 선택하면 체크되게하면 좋을것 같다.
 */
function DCheckTree(props,ref) {
  const  {treeData=[],checkStrictly=false } = props

  const checkList = useRef([])

  const handleCheck  =(checked) =>{
    ref.current = checkList
    checkList.current = checked
  }
  return (
    <Tree
      treeData={treeData}
      showLine={true}
      checkable={true}
      onCheck ={handleCheck}
      checkStrictly ={checkStrictly}
    />
  );
}



export default forwardRef(DCheckTree);