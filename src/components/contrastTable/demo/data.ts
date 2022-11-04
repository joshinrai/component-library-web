/*
 * @Author: joshinrai joshinrai@163.com
 * @Date: 2022-11-04 14:17:59
 * @LastEditors: joshinrai joshinrai@163.com
 * @LastEditTime: 2022-11-04 15:53:36
 * @FilePath: /component-library-web/src/components/contrastTable/demo/data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
