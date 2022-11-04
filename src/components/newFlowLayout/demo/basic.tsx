import React from 'react';
import FlowLayout from '..';

const array: any = [];
array.length = 100;
array.fill('');


export default () => <FlowLayout items={array} />;
