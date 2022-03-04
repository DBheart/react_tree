import React from 'react';
import Tree from "rc-tree/lib/Tree";
import PropTypes from "prop-types";
import 'rc-tree/assets/index.css'

/**
 * style에 대한 제어를 목적으로 하였으나.. 실제로 될지는 모르겠다.
 * 이 컴포넌트만 적용할수 있을까?
 * @param props
 * @returns {*}
 * @constructor
 */
function DRenderTree(props) {

  const style = { border: '1px solid #000', minHeight:props.height}
  const STYLE = `
    .tree_title_render > .rc-tree-title{
      display: block;
      width: 600px;
    }
    
    .node-motion {
      transition: all .3s;
      overflow-y: hidden;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />
      <Tree
        className={"tree_title_render"}
        treeData={props.treeData}
        showLine={true}
        style={style}
        height={props.height}
        defaultExpandAll={true}
      />
    </>
  );
}

DRenderTree.defaultProps ={
  treeData : [],
  height:"200px"
}

DRenderTree.propTypes ={
  treeDAta : PropTypes.array,
  height: PropTypes.string,
}


export default DRenderTree;