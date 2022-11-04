import React, { memo, useEffect } from 'react';
import { getRowStyle, getItemStyle } from './const';
import { Wrapper, ContrastTable as ConTable, TableHeaderTr, TableBodyTr, SpanItem } from './style';

// 表格标题key列表
const DataIndexArray: string[] = [];

type ColumnItem = {
  title: string;
  dataIndex: string;
  [key: string]: any;
};

type SourceItem = {
  key: string;
  [key: string]: any;
};

type ItemStyleProps = {
  value: any;
  compareValue: any;
  rowItemColors: string[] | undefined;
  bool: boolean;
};

interface RenderProps extends ItemStyleProps {
  item: SourceItem;
  key: string;
};

type TrStyleProps = {
  compareItem: any;
  compareRowColors: string[] | undefined;
  bool: boolean;
};

export interface ContrastProps {
  /**
   * @description       列描述数据对象
   * @default           [{ title: '列头显示文字', dataIndex: '列数据在数据项中对应的路径，支持通过数组查询嵌套路径' }]
   */
  columns: ColumnItem[];
  /**
   * @description       参照数据列表
   * @default           [{ [key: string]: any, SourceItem['dataIndex'] }]
   */
  dataSource: SourceItem[];
  /**
   * @description       对比数据列表
   * @default           [{ [key: string]: any, SourceItem['dataIndex'] }]
   */
  compareSource: SourceItem[];
  /**
   * @description       左为参照数据，右为对比数据[可选]
   * @default           false
   */
  bool?: boolean;
  /**
   * @description       跨行对比[可选]
   * @default           true
   */
  crossRow?: boolean;
  /**
   * @description       行样式[可选]
   * @default           {}
   */
  trStyle?: { [key: string]: string };
  /**
   * @description       自定义行样式，字符串格式[可选]
   * @default           ''
   */
   clientRowStyle?: (props: TrStyleProps) => string;
  /**
   * @description       行对比背景颜色数组(前两个可用)[可选]
   * @default           ['#dfd', '#ffb6ba']
   */
  compareRowColors?: string[];
  /**
   * @description       td颜色数组(使用前四个)[可选]
   * @default           ['#97f295', '#c33', '#3572b0', '#d48806']
   */
  rowItemColors?: string[];
  /**
   * @description       td自定义样式，字符串格式[可选]
   * @default           ''
   */
  clientItemStyle?: (props: ItemStyleProps) => string;
  /**
   * @description       自定义td内容[可选]
   * @default           渲染内容
   */
  rowItemRender?: (props: RenderProps) => void;
}

// 表头props
type HeaderProps = {
  columns: ColumnItem[];
}

// 表格body props
type BodyProps = {
  source: SourceItem[]; // 参照数据
  compare: SourceItem[]; // 对比数据
  bool: boolean; // 交换对比颜色
  trStyle: {[key: string]: string} | undefined; // 行样式
  clientRowStyle?: (props: TrStyleProps) => string; // 自定义行样式
  crossRow: boolean; // 是否需要交叉换行对比
  compareRowColors?: string[]; // 对比背景色
  rowItemColors?: string[]; // td内容颜色
  clientItemStyle?: (props: ItemStyleProps) => string; // 自定义td样式
  rowItemRender?: (props: RenderProps) => void;
};

// table 的props
interface TableProps extends BodyProps {
  columns: ColumnItem[];
}

// 表格标题
const Header = memo(({ columns }: HeaderProps) => {
  const bool = !!DataIndexArray.length;
  return (
    <thead>
      <TableHeaderTr>
        {
          columns?.map?.(({ title, dataIndex }: ColumnItem, index: number) => {
            if (!bool) DataIndexArray.push(dataIndex);
            return (
              <th key={`${title}_${index}`}><span>{title}</span></th>
            );
          })
        }
      </TableHeaderTr>
    </thead>
  );
});

// 表格主体
const Body = memo(({ source, compare, bool, crossRow, trStyle, clientRowStyle, compareRowColors, rowItemColors, clientItemStyle, rowItemRender }: BodyProps) => {
  const map = compare?.reduce?.((m: any, item: SourceItem) => {
    m.set(item?.key, item);
    return m;
  }, new Map()) ?? new Map();
  return (
    <tbody>
      {
        source?.map?.((item: SourceItem, index: number) => {
          const trStyleParams = {
            compareItem: crossRow ? map?.get?.(item?.key) : compare?.[index],
            compareRowColors,
            bool
          };
          return (
            <TableBodyTr
              key={[item?.key ?? +new Date, index].join('_')}
              color={clientRowStyle?.(trStyleParams) ?? getRowStyle(trStyleParams)}
              style={trStyle}
            >
              {
                DataIndexArray?.map?.((key: string, idx: number) => {
                  const colorParams = {
                    value: item?.[key],
                    compareValue: crossRow ? map?.get?.(item?.key)?.[key] : compare?.[index]?.[key],
                    rowItemColors,
                    bool
                  };
                  if (rowItemRender) return rowItemRender?.({ item, key, ...colorParams });
                  return (
                    <td key={`${key}_${index}_${idx}`}>
                      <SpanItem
                        color={clientItemStyle?.(colorParams) ?? getItemStyle(colorParams)}
                      >
                        {item?.[key] ?? '-'}
                      </SpanItem>
                    </td>
                  )
                })
              }
            </TableBodyTr>
          );
        })
      }
    </tbody>
  );
});

const Table = memo(({
  columns, source, compare, bool, crossRow, trStyle, clientRowStyle, compareRowColors, rowItemColors, clientItemStyle, rowItemRender
}: TableProps) => (
  <ConTable>
    <Header columns={columns} />
    <Body
      source={source}
      compare={compare}
      bool={bool}
      crossRow={crossRow}
      trStyle={trStyle}
      clientRowStyle={clientRowStyle}
      compareRowColors={compareRowColors}
      rowItemColors={rowItemColors}
      clientItemStyle={clientItemStyle}
      rowItemRender={rowItemRender}
    />
  </ConTable>
));

// 对比表格
const ContrastTable: React.FC<ContrastProps> = ({
    columns, dataSource, compareSource, bool = false, crossRow = true, trStyle, clientRowStyle, compareRowColors, rowItemColors, clientItemStyle, rowItemRender,
  }) => {

  useEffect(() => () => {
    DataIndexArray.length = 0;
  }, []);

  return (
    <Wrapper>
      <Table
        columns={columns}
        source={dataSource}
        compare={compareSource}
        bool={!bool}
        crossRow={crossRow}
        trStyle={trStyle}
        clientRowStyle={clientRowStyle}
        compareRowColors={compareRowColors}
        rowItemColors={rowItemColors}
        clientItemStyle={clientItemStyle}
        rowItemRender={rowItemRender}
      />
      <Table
        columns={columns}
        source={compareSource}
        compare={dataSource}
        bool={!!bool}
        crossRow={crossRow}
        trStyle={trStyle}
        clientRowStyle={clientRowStyle}
        compareRowColors={compareRowColors}
        rowItemColors={rowItemColors}
        clientItemStyle={clientItemStyle}
        rowItemRender={rowItemRender}
      />
    </Wrapper>
  );
};

export default memo(ContrastTable);
