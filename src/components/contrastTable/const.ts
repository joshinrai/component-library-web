enum colorEnum {
  lightGreen = '#dfd',
  green = '#97f295',
  pink = '#ffb6ba',
  red = '#c33',
  blue = '#3572b0',
  text = '#4a4a4a',
  backCommon = '#ddd',
  backLightCommon = '#f1f1f1',
  backBlue = '#c8e1ff',
  yellow = '#d48806',
  backYellow = '#fadb14',
  default = 'rgba(0, 0, 0, 0.85)',
};

const getRowStyle = ({ compareItem, bool, compareRowColors }: any) => {
  const style = ['background-color: '];
  if (compareItem === void 0) {
    return [...style, bool ? (compareRowColors?.[0] ?? colorEnum.lightGreen) : (compareRowColors?.[1] ?? colorEnum.pink), ';'].join('');
  }
  return '';
}

const getItemStyle = ({ value, compareValue, rowItemColors, bool }: any) => {
  const style = ['color: '];
  if (compareValue === void 0) {
    return [...style, bool ? (rowItemColors?.[0] ?? colorEnum.green) : (rowItemColors?.[1] ?? colorEnum.red), ';'].join('');
  } else if (value !== compareValue) {
    return [...style, bool ? (rowItemColors?.[2] ?? colorEnum.blue) : (rowItemColors?.[3] ?? colorEnum.yellow), ';'].join('');
  }
  return '';
};

export {
  getRowStyle,
  getItemStyle,
};
