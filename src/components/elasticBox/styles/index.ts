import styled from 'styled-components';

const BackColorMap = new Map([
  ['primary', '#40a9ff'],
  ['text', '#fff'],
]);

const ColorMap = new Map([
  ['primary', '#fff'],
  ['text', '#000000d9'],
]);

const Wrapper: any = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, ${({ fillWidth }: any) => fillWidth ?? 80}px);
`;


const ButtonItem: any = styled.div`
  text-align: center;
  height: 32px;
  line-height: 32px;
  cursor: pointer;
  padding: 5px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: noWrap;
  border-radius: 2px;
  background-color: ${({ type }: any) => BackColorMap.get(type) ?? '#fff'};
  color: ${({ type }: any) => ColorMap.get(type) ?? '#000000d9'};
  display: ${({ isShow }: any) => isShow ? '' : 'none'};
`;

const PackWrapper: any = styled.div`
  width: 80px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  color: #38ccb5;
  grid-column-start: -2;
  cursor: pointer;
  padding: 5px 0;
  &:hover {
    color: #a0d911;
    &::after {
      border-top: 2px solid #a0d911;
      border-right: 2px solid #a0d911;
    }
  }
  &::after {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-top: 2px solid #38ccb5;
    border-right: 2px solid #38ccb5;
    transform: ${({ rotate }: any) => rotate === 'true' ? 'rotate(315deg)' : 'rotate(135deg)'};
    margin-left: 10px;
  }
`;

export {
  Wrapper,
  ButtonItem,
  PackWrapper,
};
