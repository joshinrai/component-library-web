/*
 * @Author: joshinrai joshinrai@163.com
 * @Date: 2022-11-04 10:31:32
 * @LastEditors: joshinrai joshinrai@163.com
 * @LastEditTime: 2022-11-04 16:44:27
 * @FilePath: /component-library-web/src/components/contrastTable/demo/basic.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ContrastTable from '..';
import { columns, dataSource, compareSource } from './data'

export default () => (
  <ContrastTable
    columns={columns}
    dataSource={dataSource}
    compareSource={compareSource}
  />
);
