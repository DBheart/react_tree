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


rc-tree에서 import한 내역은 다음과 같다.
```markdown
info Direct dependencies
└─ rc-tree@5.4.4
info All dependencies
├─ rc-motion@2.4.5
├─ rc-resize-observer@1.2.0
├─ rc-tree@5.4.4
├─ rc-util@5.18.1
├─ rc-virtual-list@3.4.2
├─ resize-observer-polyfill@1.5.1
└─ shallowequal@1.1.0

```