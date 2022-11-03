import React, { Fragment, memo, useCallback, useReducer, useRef, useEffect } from 'react';
import { Wrapper, ButtonItem, PackWrapper } from './styles';

type Item = {
  label: string;
  value: string;
};

export interface ElasticBoxProps {
  /**
   * @description       内容列表
   * @default           [{label: 'aaa', value: 'aaa'}]
   */
  items?: Item[];
  /**
   * @description       宽度（可选）
   * @default           80
   */
  itemWidth?: number | string;
  /**
   * @description       设置遍历item的kv值(可选)
   * @default           {label: 'label', value: 'value'}
   */
  fieldNames?: Item;
  /**
   * @description       选中按钮回调事件(可选)
   * @default           (value) => void
   */
  selectAction?: (value: string) => void;
  /**
   * @description       自定义items内容(可选)
   * @default           button按钮
   */
  renderItem?: (item: Item) => HTMLDivElement;
  /**
   * @description       最后一项dom文案(可选)
   * @default           展开/收起(文案)
   */
  actionTexts?: string[];
  /**
   * @description       最后一项dom(可选)
   * @default           展开/收起(按钮)
   */
  actionDom?: HTMLDivElement;
  children?: any;
}

interface ButtonProps {
  /**
   * @description       按钮显示标签
   * @default           传入label文案内容
   */
  label: string;
  /**
   * @description       按钮值
   * @default           传入value值
   */
  value: string;
  /**
   * @description       按钮索引
   * @default           number
   */
  index: number;
  /**
   * @description       每行可以有的按钮个数
   * @default           number
   */
  buttonLen: number;
};

const initialState = {
  packBool: false, // 显示展开/收起
  selected: void 0, // 当前选择项
  maxButtonLen: 0, // 每行按钮个数
};

const reducer = (state: any, payload: any) => ({...state, ...payload});

//  防抖函数
let timer: any = null;
function debounce(fn: any, wait = 200) {
  return function(this: unknown) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    let args = arguments;

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}

// 存在的window.resize
const oldResize: any = window.onresize;

// window.resize监听
const resize = (fn: any) => {
  if (window.onresize) {
    window.onresize = debounce(() => {
      oldResize?.();
      fn?.();
    }, 200);
  } else window.onresize = debounce(fn, 200);
};

// 还原window.resize监听并清空timeout
const resetResize = () => {
  window.onresize = oldResize;
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}

// 弹性盒子主体
const ElasticBox: React.FC<ElasticBoxProps> = (
  { items, itemWidth, fieldNames, selectAction, renderItem, actionTexts, actionDom, children }
  ) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selected, packBool, maxButtonLen } = state;

  const ref: any = useRef(null);

  // 选择内容item
  const ButtonDom = memo(({ label, value, index, buttonLen }: ButtonProps) => {

    const click = useCallback(() => {
      selectAction?.(value);
      dispatch({ selected: value });
    }, [label, value]);

    return (
      <ButtonItem
        type={selected === value ? 'primary' : 'text'}
        key={value}
        onClick={click}
        isShow={index < buttonLen - 1 || packBool}
      >
        {label}
      </ButtonItem>
    );
  });

  const setButtonLen = () => {
    const width = ref?.current?.scrollWidth ?? 0;
    const length = Math.floor(width / +(itemWidth || 80));
    dispatch({ maxButtonLen: length });
  };

  useEffect(() => {
    setButtonLen();
    resize(setButtonLen);
  }, []);

  useEffect(() => () => {
    resetResize();
  }, [])

  return (
    <Wrapper ref={ref} fillWidth={itemWidth}>
      {items ? (
        <>
          {
            items.map((item: any, index: number) => {
              const label = item[fieldNames?.label ?? 'label'];
              const value = item[fieldNames?.value ?? 'value'];
              const dom = (
                <ButtonDom
                  label={label}
                  value={value}
                  index={index}
                  buttonLen={maxButtonLen}
                />
              )
              return (
                <Fragment key={value ?? label ?? +new Date}>
                  {renderItem?.({ label, value }) ?? dom}
                </Fragment>
              );
            })
          }
          {
            items?.length > maxButtonLen ? (
              actionDom ??
              <PackWrapper
                onClick={() => dispatch({ packBool: !packBool })}
                rotate={String(packBool)}
              >
                {packBool ? (actionTexts?.[0] ?? '收起') : (actionTexts?.[1] ?? '展开')}
              </PackWrapper>
            ) : null
          }
        </>
      ) : children}
    </Wrapper>
  );
};

export default ElasticBox;
