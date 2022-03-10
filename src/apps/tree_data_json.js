export const treeData = [
  {
    key: '0',
    title: '첫번째노드',
    depth:0, seq:0,
    children: [
      { key: '0-0', title: 'node 0-0',depth:1, seq:0 },
      { key: '0-1', title: 'node 0-1', depth:1, seq:1, },
      {
        key: '0-2',
        title: 'node 0-2',
        depth:1, seq:2,
        children: [
          { key: '0-2-0', title: 'node 0-2-0',depth:2, seq:0 },
          { key: '0-2-1', title: 'node 0-2-1',depth:2, seq:1 },
          { key: '0-2-2', title: 'node 0-2-2',depth:2, seq:2 },
        ],
      },
      { key: '0-3', title: 'node 0-3',depth:1, seq:3, },
      { key: '0-4', title: 'node 0-4',depth:1, seq:4, },
      { key: '0-5', title: 'node 0-5',depth:1, seq:5, },
      { key: '0-6', title: 'node 0-6',depth:1, seq:6, },
      { key: '0-7', title: 'node 0-7',depth:1, seq:7, },
      { key: '0-8', title: 'node 0-8',depth:1, seq:8, },
      {
        key: '0-9',
        title: 'node 0-9',
        depth:1, seq:9,
        children: [
          { key: '0-9-0', title: 'node 0-9-0',depth:2, seq:0, },
          {
            key: '0-9-1',
            title: 'node 0-9-1',
            depth:2, seq:1,
            children: [
              { key: '0-9-1-0', title: 'node 0-9-1-0',depth:2, seq:0, },
              { key: '0-9-1-1', title: 'node 0-9-1-1',depth:2, seq:1, },
              { key: '0-9-1-2', title: 'node 0-9-1-2',depth:2, seq:2, },
              { key: '0-9-1-3', title: 'node 0-9-1-3',depth:2, seq:3, },
              { key: '0-9-1-4', title: 'node 0-9-1-4',depth:2, seq:4, },
            ],
          },
          {
            key: '0-9-2',
            title: 'node 0-9-2',
            depth:2, seq:2,
            children: [
              { key: '0-9-2-0', title: 'node 0-9-2-0', depth:3, seq:0, },
              { key: '0-9-2-1', title: 'node 0-9-2-1', depth:3, seq:1, },
            ],
          },
        ],
      },
    ],
  },
  {
    key: '1',
    title: 'node 1',
    depth:0, seq:1,
    // children: new Array(1000)
    //   .fill(null)
    //   .map((_, index) => ({ title: `auto ${index}`, key: `auto-${index}` })),
    children: [
      {
        key: '1-0',
        title: 'node 1-0',
        depth:1, seq:0,
        children: [
          { key: '1-0-0', title: 'node 1-0-0',depth:2, seq:0, },
          {
            key: '1-0-1',
            title: 'node 1-0-1',
            depth:2, seq:1,
            children: [
              { key: '1-0-1-0', title: 'node 1-0-1-0',depth:3, seq:0, },
              { key: '1-0-1-1', title: 'node 1-0-1-1',depth:3, seq:1, },
            ],
          },
          { key: '1-0-2', title: 'node 1-0-2',depth:2, seq:2 },
        ],
      },
    ],
  },
]
