const columns = [{
  title: '姓名',
  dataIndex: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
}, {
  title: '性别',
  dataIndex: 'gender',
}];

const dataSource = [{
  key: 'tony',
  name: 'tony',
  age: '17',
  gender: '男',
}, {
  key: '张三',
  name: '张三',
  age: '18',
  gender: '女',
}, {
  key: '李四',
  name: '李四',
  age: '19',
  gender: '男',
}, {
  key: 'honey',
  name: 'honey',
  age: '21',
  gender: '女',
}, {
  key: '王五',
  name: '王五',
  age: '20',
  gender: '女',
}];

const compareSource = [{
  key: 'tony',
  name: 'tony',
  age: '17',
  gender: '男',
}, {
  key: '李四',
  name: '李四',
  age: '19',
  gender: '男',
}, {
  key: 'pony',
  name: 'pony',
  age: '21',
  gender: '女',
}, {
  key: 'honey',
  name: 'honey1',
  age: '22',
  gender: '女',
}];

export {
  columns,
  dataSource,
  compareSource,
};
