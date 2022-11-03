/*
 * @Author: joshinrai joshinrai@163.com
 * @Date: 2022-10-17 17:22:54
 * @LastEditors: joshinrai joshinrai@163.com
 * @LastEditTime: 2022-11-03 17:26:43
 * @FilePath: /component-library-web/src/components/elasticBox/styles/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
