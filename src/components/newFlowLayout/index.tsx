import React from 'react';
import { Wrapper, GridItem } from './style';

export interface NewFlowLayoutProps {
  /**
   * @description       内容列表
   * @default           []
   */
  items?: any[];
}

const NewFlowLayout: React.FC<NewFlowLayoutProps> = ({ items }) => (
  <Wrapper>
    {
      items?.map?.((item: any, index: number) => {
        return (<GridItem height={index}>{index}</GridItem>);
      })
    }
  </Wrapper>
);

export default NewFlowLayout;
