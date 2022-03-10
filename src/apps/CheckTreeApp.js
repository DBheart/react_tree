import React from 'react';
import {treeData} from "./tree_data_json";
import DCheckTree from "../components/DCheckTree";

const CheckTreeApp = (props) => {
  const treeCheckList = React.createRef();

  const handleClick = () =>{
      console.log(treeCheckList)
  }
  return (
    <div>선택한것을 옮길때 자주사용할 것 같다.
      <button onClick={handleClick}>체크리스트 확인</button>
      <DCheckTree ref={treeCheckList} treeData={treeData} height={"600px"}/>
    </div>
  )
}

export default CheckTreeApp;