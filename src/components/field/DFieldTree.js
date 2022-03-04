import React, {useState} from 'react';
import DFilterTree from "../DFilterTree";
import {treeData} from "../../apps/tree_data_json";

function DFieldTree({label, name, onChange}) {
  const [show, setShow] = useState(false);
  const [selectNode, setSelectNode] = useState('')

  const handleSelect = async (node) =>{
    await setSelectNode(node.title)
    if(onChange){
      onChange(node)
    }

    await setShow(false)
  }

  const clearNode = () =>{
    setSelectNode('')
  }

  return (
    <div style={{display:"flex",width:"100%", position:"relative"}}>
      {label &&<label htmlFor={name}>{label}</label>}
      <input readOnly={true} id={name} type={"text"} value={selectNode} onClick={() =>setShow(!show)} />
      <button onClick={clearNode}><i className={"fas fa-smile fa-xs"}/> </button>
      {/*<button onClick={clearNode}><i className={"fas fa-smile fa-xs fa-spin"}/> </button>*/}
      {show &&
        <div  style={{position:"absolute",left:"50px", top:"25px"}}>
          <DFilterTree treeData={treeData} handleSelect={handleSelect}/>
        </div>
      }
    </div>
  );
}

export default DFieldTree;