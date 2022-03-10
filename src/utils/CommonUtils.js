const CHILD_FIELD = "children";

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

//이곳의 childField는 children으로 통일하자...이것을 써놓는 것도 좋을것 같다.

export const loopNewFn = (data, key, childField, callback) => {
  data.forEach((item, index, arr) => {
    if (item.key === key) {
      callback(item, index, arr);
      return;
    }
    if (Array.isArray(item[childField])) {
      loopNewFn(item[childField], key, childField, callback);
    }
  });
};

export const handleTreeDrop = (info, treeData=[], callback) => {
  callback(treeDropData(info, treeData))
}

/**
 * parentId, depth, seq를 구해서 변경하기 위해서 사용한다.
 * dropData에서는 0번째 있는것은 parentId를 수정해주어야하고
 * dropData에서 children들은 depth를 수정하고
 * friendList에서는 seq를 수정해야 한다.
 * @param info
 * @param treeData
 * @returns {{changeList: *[], dropData, friendList: (*&{seq: *})[]}}
 */
export const treeDropData = (info,treeData=[]) => {
  const dropKey = info.node.key;
  const dragKey = info.dragNode.key;
  const dropPos = info.node.pos.split('-');
  const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
  // dropPostion
  // 0 - 드래그한곳과 깊이가 다른것 (drop이 drag보다 깊이가 깊은 것)
  // 1 - 드래그한곳과 깊이가 같은곳
  // -1 : 제일 위인곳, drag한곳 위에 아무것도 없을 때(제일 위)
  // const dropPosition = info.dropPosition;

  const data = [...treeData];

  let dragObj;

  // 기존것 제거하고 드래그한 데이터를 가져온다.
  loop(data, dragKey, (item, index, arr) => {
    arr.splice(index, 1);
    dragObj = item;
  });

  //이렇게 가져오면 불필요한것을 가져오기때문에 지양한다.
  // dragObj = info.dragNode

  // console.log('data', data)
  // console.log('dragObject',dragObj)
  // console.log('dragrNode', info.dragNode)
  // console.log('dropPosition', dropPosition)
  // console.log('info dropPosition', info.dropPosition)
  // console.log('info.node.pos', info.node.pos)
  // console.log('dropPos', info.node.pos.split('-'))
  // console.log('dropPosValue', dropPos[dropPos.length-1])
  // console.log('dropPosition', info.dropPosition)
  // console.log('order', info.dropPosition)

  // console.log('drag data', dragObj);
  // console.log('drop data', info.node)
  console.log('dragKey', dragKey)

  //dropPostion : -1이면 위에 노드가 없는 것
  //dropPostion : 0 이면 위에 노드와 깊이가 다른 것
  //dropPostion : 1 이면 위에 노드와 깊이가 같은 것
  if (dropPosition === 0) {//폴더의 처음 부분, 또는 폴더가 만들어지는 부분
    // Drop on the content
    loop(data, dropKey, item => {
      item.children = item.children || [];
      item.children.unshift(dragObj);
    });
  } else {
    // Drop on the gap (insert before or insert after)
    let ar;
    let i;
    loop(data, dropKey, (item, index, arr) => {
      ar = arr;
      i = index;
    });
    if (dropPosition === -1) {//
      ar.splice(i, 0, dragObj);
    } else {
      ar.splice(i + 1, 0, dragObj);
    }
  }

  let friendList = []
  loop(data, dragKey, (item,index,parentItem) =>{
    console.log('drag seq', index)
    dragObj.seq = index
    friendList = parentItem
  })

  valueChange(dragObj, info.node, dropPosition)

  loopChildDepth(dragObj, dragObj.depth);

  friendList = friendList.map((data, index) => ({...data, seq:index}))

  // this.setState({
  //   gData: data,
  // });

  console.log('dragObj', dragObj)
  return {changeList:data, dropData:dragObj, friendList:friendList}
};


  //dropPostion : -1이면 위에 노드가 없는 것
  //dropPostion : 0 이면 위에 노드와 깊이가 다른 것
  //dropPostion : 1 이면 위에 노드와 깊이가 같은 것
/**
 *
 * @param dragObj
 * @param dropObj
 * @param dropPos
 */
const valueChange = (dragObj, dropObj, dropPos) =>{
  if(dropPos === -1){
    dragObj.parent_id = null
    dragObj.depth = 0
    dragObj.seq = 0

  }else if(dropPos ===0){
    dragObj.parent_id = dropObj.id
    dragObj.depth = dropObj.depth + 1
    dragObj.seq = 0
  }else{
    dragObj.parent_id = dropObj.parent_id
    dragObj.depth = dropObj.depth
  }
}

const loopChildDepth = (data, parentDepth) =>{
  if(data.children){
    const changeDepth = parentDepth + 1
    data.children.forEach(item =>{
      item.depth = changeDepth

      if(item.children){
        loopChildDepth(item, changeDepth)
      }
    })
  }
}

export const filterFn = (array, text) =>{
  const getNodes = (result, object) => {
    // if (object.title.indexOf(text) > -1) {
    if (object.title.includes(text)) {
      result.push(object);
      return result;
    }
    if (Array.isArray(object.children)) {
      const children = object.children.reduce(getNodes, []);
      if (children.length) result.push({ ...object, children });
    }
    return result;
  };
  return array.reduce(getNodes, []);
}

export const filterNewFn = (array, text, compareField) =>{
  const getNodes = (result=[], object={}) => {
    try{
      // if (object.title.indexOf(text) > -1) {//아래와 같은 뜻이다. js 버전이 낮으면 이걸 써야 한다.
      if (object[compareField].includes(text)) {
        result.push(object);
        return result;
      }
      if (Array.isArray(object[CHILD_FIELD])) {
        const children = object[CHILD_FIELD].reduce(getNodes, []);
        if (children.length) result.push({ ...object, children });
      }
    }catch (e) {
      console.log(e)
      console.log('비교값을 text,number등으로 변경하십시요. object나 html값은 허용하지 않습니다.')
    }

    return result;
  };
  return array.reduce(getNodes, []);
}


//--------------------------------------------------------------------------
// 참조 : http://daplus.net/javascript-%EC%9E%90%EB%B0%94-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%ED%94%8C%EB%9E%AB-%EB%B0%B0%EC%97%B4%EC%97%90%EC%84%9C-%ED%8A%B8%EB%A6%AC-%EB%B0%B0%EC%97%B4-%EB%B9%8C%EB%93%9C/

/**
 * 부모가 항상 자녀보다 먼저 오는 경우만 가능하다.
 * 플랫 배열 -> 트리 배열 ,
 * 부모와 자식 필드가 있어야 한다.
 * @param list, 정렬된 flat 구조 리스트
 * @param id, 자식ID
 * @param parendId, 부모ID
 * @returns {*[]}, tree 구조
 */
export const list_to_tree = (list,id,parendId) => {
  let map = {}, node, roots = [], i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i][id]] = i; // initialize the map
    list[i][CHILD_FIELD] = []; // initialize the children
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node[parendId]!== "0") {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node[parendId]]][CHILD_FIELD].push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;


 // 예제
 //  let entries = [
 //    {"id": "12", "parentId": "0", "text": "Man", "level": "1", "children": null},
 //    {"id": "6", "parentId": "12", "text": "Boy", "level": "2", "children": null},
 //    {"id": "7", "parentId": "12", "text": "Other", "level": "2", "children": null},
 //    {"id": "9", "parentId": "0", "text": "Woman", "level": "1", "children": null},
 //    {"id": "11", "parentId": "9", "text": "Girl", "level": "2", "children": null}
 //  ];
 //
 //  console.log('정렬된 flat list -> tree',list_to_tree(entries,"id","parentId"));
}

/**
 * 부모값이 무엇인지 중요하지 않다.
 * @param arr
 * @param childField
 * @param parentField
 * @returns {*[]}
 */
export const un_flat_ten = (arr,childField, parentField) => {
  let tree = [],
      mappedArr = {},
      arrElem,
      mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  for(let i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem[childField]] = arrElem;
    mappedArr[arrElem[childField]][CHILD_FIELD] = [];
  }


  for (let id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem[parentField]) {
        mappedArr[mappedElem[parentField]][CHILD_FIELD].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}

// let arr = [
//           {'id':1 ,'parentid' : null},// or           {'id':1 ,'parentid' : 0},
//           {'id':4 ,'parentid' : 2},
//           {'id':3 ,'parentid' : 1},
//           {'id':5 ,'parentid' : 0},
//           {'id':6 ,'parentid' : 0},
//           {'id':2 ,'parentid' : 1},
//           {'id':7 ,'parentid' : 4},
//           {'id':8 ,'parentid' : 1}
//         ];
//
//
//   let tree = un_flat_ten(arr, "id","parentid");
//   console.log(tree)



/**
 * id 필드가 고정으로 있어야 진행된다.
 * root노드의 값이 반드시 null이어야 한다.
 * @param items
 * @param id , 필수 필드
 * @param parentField, 부모 필드
 */
//이건 함수로 만들기보다는.. 그냥 직접 쓰는게 나을것 같다.
export const nest = (items, id = null, parentField = 'parent_id') => items
    .filter(item => item[parentField] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));


//  예제
//  const comments = [
//   {id: 1,parent_id: null},
//   {id: 2, parent_id: 1},
//   {id: 3, parent_id: 1},
//   {id: 4, parent_id: 2},
//   {id: 5, parent_id: 4},
// ];
//  console.log(nest(arr))

