남은 것
1. 체크박스 : 그냥 checkable와 onCheck 이벤트만 쓰면 될것 같은데?
  - basic 확인
2. 드롭박스 트리 : 여기있는것보다... 이사님이 만든게 훨씬 좋아보인다.
    - dropdown 확인
3. 필터링 
    - dropdown 확인 : 이사님것이 더 좋아보인다.
4. 컨텍스트메뉴는... 쓰지 말자.
5. 플랫한 데이터를 tree 데이터로 전환하는 방법은 무엇이 있을까?

---
    console.log('dragObject',dragObj)
    console.log('dragrNode', info.dragNode)
    console.log('dropPosition', dropPosition)
    
    
    드래그 해서 순서 바꿀때 중요한것
    1. 드래그중인 아이템 
      - 하위값도 같이 가져오는지 체크필요
      - 여기서는 하위값도 같이 가져온다.
      - 드롭 이벤트에서 값을 가져오는데? 
    2. 드롭하는 위치
      - 드롭할때 드래그 오브젝트는 현재 위치에서 삭제
      - 드롭할때 드래그 오브젝트 모두 추가
    3. dropPosition
      - 모하는 놈이지? 
      - (0, -1, 그외) 3개로 나눈다. 
      
    * 예제에 있는 값을 봤는데... 왜이렇게 복잡하게 했는지 모르겠다. 이렇게 해야 되는것인가? 신기하네...

드래그를 위해서는 
1. 전체 데이터 필요
    - 키값이 존재해야한다.
    - 전체 데이터를 가지고 드래그 하면 다시 값을 세팅한다.
2. 드래그 되는 키값, 드래그 되는 대상들
3. 드롭되는 위치의 키값
4. 드래그된 아이템 키값과 깊이와 order도 중요하다.
  - 해당 값을 가지고 서버에 저장한다. 
    - 저장은 어느때 해야할까?
        - 드롭된 시점에 진행한다?
        - 저장버튼을 눌러서 수정된것만 저장한다?
            - 그러기 위해서는 저장전까지 값을 가지고 있어야 한다. 
    - 저장후 리로드를 하는게 맞을까?

---

multi : 여러개를 선택하는 옵션 , onSelect에서 선택한것을 확인할수 있다.
  - 체크가 있는데.. 멀티 셀렉트가 필요할까?
checkStrictly : 부모를 체크 선택한다고 하위 모두 선택되지 않게 하는 옵션
컨텍스트메뉴도 잘쓰지 않는다.
  - 바로 수정이 없네?
모션은 모에 쓰는 걸까?  


렌더링을 위한 조치
1. TreeNode로 하위값을 넣는다.
```javascript
const loop = data =>
  data.map(item => {
    if (item.children) {
      return (
        <TreeNode key={item.key} title={item.title} disableCheckbox={item.key === '0-0-0-key'}>
          {loop(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode key={item.key} title={item.title} />;
  });
```

``` html
<Tree
  checkable
  onExpand={this.onExpand}
  expandedKeys={this.state.expandedKeys}
  autoExpandParent={this.state.autoExpandParent}
  onCheck={this.onCheck}
  checkedKeys={this.state.checkedKeys}
  onSelect={this.onSelect}
  selectedKeys={this.state.selectedKeys}
>
  {loop(gData)}
</Tree>
```

2. "treeData"의 값에 "html"을 넣는다.
```javascript
function getTreeData() {
  // return [
  //   { key: '00', children: [{ key: '000' }, { key: '001' }] },
  //   { key: '01', children: [{ key: '010' }, { key: '011' }] },
  // ];

  return groupList(
    data.map(item => ({
      title: () => renderTitle(item.fieldName),
      key: item.fieldName,
      checkable: true,
      ...item,
    })),
    'id',
    [],
  );
}
```

```html
<div style={{ flex: '1 1 50%' }}>
  <h3>With Virtual</h3>
  <Tree
    checkable
    defaultExpandAll={false}
    motion={motion}
    height={200}
    checkedKeys={keys}
    itemHeight={20}
    onCheck={checkedKeys => {
      console.log('onCheck:', checkedKeys);
      setKeys(checkedKeys);
    }}
    style={{ border: '1px solid #000' }}
    treeData={getTreeData()}
  />
</div>

```
---

리액트 트리를 위한 테스트
yarn add rc-tree
npm install rc-tree

트리 타입
  1. 기본적인 데이터만 들어가는 것
  2. 높이 고정
  3. 타이틀 렌더링 : https://tree-react-component.vercel.app/demo/funtion-title
      - 리스트 형태로 받아서 트리형태로 변경한다. 
      - 타이틀을 html로 변경이 가능하다. 
  4. 순서 변경 : 드래그
    - onDrop이벤트 일때 값을 변경하면 될것 같다.
  5. 체크 박스
  6. 필터링 트리
    - 여기서는 팝업으로 관련된 것만 띄우던데... 
  7. trnasfer tree
  8. dropdown 트리 
  9. curd기능이 있는 트리
  10. 동적 트리

기타 특징
  1. 필드 네임을 바꿀수 있다 : https://tree-react-component.vercel.app/demo/field-names
    - 기본 네임 : children, title, key 
  2. context메뉴를 쓸수 있다. 
    - 트리에서 마우스 오른쪽키나 기타 등등의 키로 메뉴를 띄워서 진행할 수 있다.

