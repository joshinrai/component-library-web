import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-template-rows: masonry;
`;

const GridItem: any = styled.div`
  display: block;
  width: 100%;
  height: ${({ height }: any) => (height % 3) * 100 || 50}px;
  background-color: #ccc;
`;

export {
  Wrapper,
  GridItem,
};
