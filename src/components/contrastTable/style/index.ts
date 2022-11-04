import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ContrastTable = styled.table`
  flex: 1;
  width: 100%;
  height: max-content;
  background-color: #fff;
  border-collapse: collapse;
`;

const TableHeaderTr = styled.tr`
  th {
    background-color: #fafafa;
    color: rgba(0, 0, 0, 0.85);
    padding: 5px 10px;
  }
`;

const TableBodyTr: any = styled.tr`
  margin: 2px 0;
  ${({ color }: any) => color};
  color: '#4a4a4a';
  td {
    padding: 5px 10px;
    text-align: center;
    height: 32px;
    line-height: 32px;
  }
`;

const SpanItem: any = styled.span`
  ${({ color }: any) => color};
`;

export {
  Wrapper,
  ContrastTable,
  TableHeaderTr,
  TableBodyTr,
  SpanItem,
};
