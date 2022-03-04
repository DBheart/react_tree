import React, {forwardRef, useState} from 'react';
import Tree from "rc-tree/lib/Tree";
import {filterNewFn} from "../utils/CommonUtils";

/**
 * ref를 넘기나, selectedRow로 넘기나 똑같지 않을까?
 * 필터할때 title에 html이 있으면 안될 것 같다. 괜 시리... 복잡해진다.
 * 아니면 필터할 것을 따로 마련해야할 것 같다.
 * @param props
 * @param ref : 선택한리스트
 * @returns {JSX.Element}
 * @constructor
 */
function DFilterTree(props, ref) {
  const {treeData=[],multiple=false, handleSelect} = props
  const [filter,setFilter] = useState('')

  const select = (selectedKeys =[], info) => {
    const {selectedNodes} = info
    let node;

    //멀티 셀렉트일때는 리스트, 아니면 object로 전달
    if(selectedNodes.length> 0){
      if(multiple){
        node = selectedNodes
      }else{
        node = selectedNodes[0]
      }
    }
    if(ref){
      ref.current = node
    }

    if(handleSelect){
      handleSelect(node)
    }
  }



  const handleChange = (e) =>{
    const filter = e.target.value;
    setFilter(filter+"")
  }

  const filterList = filterNewFn(treeData, filter,"title")

  return (
    <div>
      <input type={"text"} onChange={handleChange}/>
      <Tree
        treeData={filterList}
        defaultExpandAll={true}
        onSelect = {select}
        multiple={multiple}
        showLine={true}
      />
    </div>
  );
}

export default forwardRef(DFilterTree);