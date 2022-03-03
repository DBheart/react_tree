/**
 * 특정 값을 복사해서 필드를 생성한다.
 * entity에 children이 있을겨우 무한으로 호출하여서 진행한다.
 * entity가 object일 경우 와 array일경우로 나누어서 진행한다.
 *  - 값을 보는것은 length가 있는지 없는지로 확인한다.
 *  - 좀더 확고한것은 Array.isArray로 해도 될것 같은데 말이지....
 * @param entity
 * @param args : (array,array) 형태로 와야한다.
 */
export const addNewKey = (entity, ...args) =>{
  if(entity.length === undefined){
    args.forEach((arg) => {
      entity[arg[1]] = entity[arg[0]];
    })
    if(entity.children){
      addNewKey(entity.children, ...args);
    }
  }else{
    entity.forEach((el) =>{
      args.forEach((arg) => {
        el[arg[1]] = el[arg[0]];
      })
      if(el.children){
        addNewKey(el.children, ...args)
      }
    })
  }
}

/**
 * 위에 있는 것의 상위 호환쯤 되는 것 같다.
 * @param data
 * @param key
 * @param callback : fucntion, data에 있는 key값을 찾아서 콜백을 실행한다. children이 있으면 계속 실행한다.
 */
export const loop = (data, key, callback) => {
  data.forEach((item, index, arr) => {
    if (item.key === key) {
      callback(item, index, arr);
      return;
    }
    if (item.children) {
      loop(item.children, key, callback);
    }
  });
};

export const handleTreeDrop = (info, treeData=[], callback) => {
  callback(treeDropData(info, treeData))
}


const treeDropData = (info,treeData=[]) => {
  console.log('drop', info);
  const dropKey = info.node.key;
  const dragKey = info.dragNode.key;
  const dropPos = info.node.pos.split('-');
  const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

  // const dropPosition = info.dropPosition;

  const data = [...treeData];

  // Find dragObject
  //data에서 키값을 제거한 후에 제거한 값을 돌려준다.
  let dragObj;

  // 기존것 제거
  loop(data, dragKey, (item, index, arr) => {
    arr.splice(index, 1);
    dragObj = item;
  });

  //이렇게 가져오면 불필요한것을 가져오기때문에 지양한다.
  // dragObj = info.dragNode

  console.log('data', data)
  console.log('dragObject',dragObj)
  console.log('dragrNode', info.dragNode)
  console.log('dropPosition', dropPosition)
  console.log('info dropPosition', info.dropPosition)
  console.log('info.node.pos', info.node.pos)
  console.log('dropPos', info.node.pos.split('-'))
  console.log('dropPosValue', dropPos[dropPos.length-1])
  // console.log('dropPosition', info.dropPosition)
  console.log('order', info.dropPosition)
  console.log('depth',dropPos.length) //depth가 맞지 않는다...
  console.log('dropKey', dropKey, dragKey)

  if (dropPosition === 0) {//폴더의 처음 부분, 또는 폴더가 만들어지는 부분
    // Drop on the content
    loop(data, dropKey, item => {
      // eslint-disable-next-line no-param-reassign
      item.children = item.children || [];
      // where to insert 示例添加到尾部，可以是随意位置
      item.children.unshift(dragObj);
    });
  } else {//이미 폴더가 있는 부분
    // Drop on the gap (insert before or insert after)
    let ar;
    let i;
    loop(data, dropKey, (item, index, arr) => {
      ar = arr;
      i = index;
    });
    if (dropPosition === -1) {//부모가 없는 곳
      ar.splice(i, 0, dragObj);
    } else {
      ar.splice(i + 1, 0, dragObj);
    }
  }

  // this.setState({
  //   gData: data,
  // });

  return data
};

/**
 * 리스트에 대한 데이터 구조를 children으로 바꾸어 준다.
 */
export const listTochildren = () =>{

}