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
