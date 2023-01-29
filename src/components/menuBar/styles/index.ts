import styled, { keyframes } from 'styled-components';

const colorMap: Map<string, string> = new Map([
  ['first', '#ff8c00'],
  ['second', '#f54888'],
  ['third', '#4343f5'],
  ['forth', '#e0b115'],
  ['fifth', '#65ddb7'],
]);

const strok = keyframes`
  100% {
    stroke-dashoffset: 400;
  }
`;

const MenuBarWrapper: any = styled.div`
  margin: 0;
  display: flex;
  height: 40vh;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }: any) => colorMap?.get?.(active) ?? '#ffb457'};
  -webkit-tap-highlight-color: transparent;
  transition: background-color var(--duration);

  box-sizing: border-box;
  --bgColorMenu : #1d1d27;
  --duration: .7s;
`;

const MenuWrapper = styled.menu`
  margin: 0;
  display: flex;
  width: 100%;
  min-width: 32.05em;
  font-size: 1.5em;
  padding: 0 2.85em;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: var(--bgColorMenu);
`;

const MenuItem: any = styled.button`
  all: unset;
  flex-grow: 1;
  z-index: 1;
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  align-items: center;
  will-change: transform;
  justify-content: center;
  padding: 0.55em 0 0.85em;
  transition: transform var(--timeOut , var(--duration));
  --bgColorItem: ${({ color }: any) => color};

  &::before {
    content: "";
    z-index: -1;
    width: 4.2em;
    height: 4.2em;
    border-radius: 50%;
    position: absolute;
    transform: scale(0);
    transition: background-color var(--duration), transform var(--duration);
  }

  &.active {
    transform: translate3d(0, -.8em , 0);
    & > .icon {
      animation: ${strok} 1.5s reverse;
    }
  }

  &.active::before{
    transform: scale(1);
    background-color: var(--bgColorItem);
  }

  & > .icon{
    width: 2.6em;
    height: 2.6em;
    stroke: white;
    fill: transparent;
    stroke-width: 1pt;
    stroke-miterlimit: 10;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 400;
  }
`;

const MenuBorder: any = styled.div`
  left: 0;
  bottom: 99%;
  width: 25%;
  height: 2.4em;
  position: absolute;
  clip-path: url(#menu);
  will-change: transform;
  background-color: var(--bgColorMenu);
  transition: transform var(--timeOut , var(--duration));
  transform: translate3d(${({ left }: any) => ['calc((', 40 * left, '% + ', (2.85 - 0.57 * left), 'em) - 50%', ')'].join('')}, 0 , 0);
`;

const SvgContainer = styled.div`
  width: 0;
  height: 0;
`;

export {
  MenuBarWrapper,
  MenuWrapper,
  MenuItem,
  MenuBorder,
  SvgContainer,
};
