import React from 'react';
import DFieldTree from "../components/field/DFieldTree";

function DropDownTreeApp(props) {


  return (
    <div>
      <div className={"search_layer"}
        style={{display:"flex", justifyContent:"space-between",border: '1px solid #000', width:'100%', margin:'5px'}}
      >
        <div style={{display:"flex", paddingRight:"10px",}}>
          <div>
            <label>검색어</label>
            <input/></div>
          <div>
            <DFieldTree label={"시스템"} name={"searchSystem"}/>
          </div>
        </div>
        <div><button>검색</button></div>
      </div>
      <div className={"content_layer"} style={{border: '1px solid #000', width:'100%', margin:'5px'}}>
        <div className={"button_layer"}></div>
        <div className={"table_layer"}>
          <table>
            <thead>
              <tr>
                <th>시스템그룹</th>
                <th>시스템</th>
                <th>사용자</th>
                <th>수정자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ADG</td>
                <td>가족원</td>
                <td>deity</td>
                <td>deity</td>
              </tr>
              <tr>
                <td>ADG</td>
                <td>가족원</td>
                <td>deity</td>
                <td>deity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DropDownTreeApp;