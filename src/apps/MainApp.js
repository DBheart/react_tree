import React from 'react';

function MainApp(props) {
  return (
    <ul>
      <li><a href="/default">기본트리</a></li>
      <li><a href="/dd">드롭다운 트리</a></li>
      <li><a href="/filter">필터트리</a></li>
      <li><a href="/manage">트리 관리</a></li>
      <li><a href="/sortable">Drag&Drop 트리</a></li>
      <li><a href="/check">체크박스 트리</a></li>
    </ul>
  );
}

export default MainApp;