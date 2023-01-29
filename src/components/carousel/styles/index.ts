/*
 * @Author: joshinrai joshinrai@163.com
 * @Date: 2023-01-29 10:52:53
 * @LastEditors: joshinrai joshinrai@163.com
 * @LastEditTime: 2023-01-29 13:48:39
 * @FilePath: /component-library-web/src/components/carousel/styles/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from 'styled-components';

const MAX_VISIBILITY = 3;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-image: linear-gradient(45deg, #8b5cf6, #ec4899);
  font-family: 'Montserrat', sans-serif;
`;

const CarouselContentWrapper = styled.div`
  position: relative;
  width: 23rem;
  height: 23rem;
  perspective: 500px;
  transform-style: preserve-3d;
`;

const CardContainerWrapper: any = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(calc(var(--offset) * 50deg)) scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem)) translateX(calc(var(--direction) * -5rem));
  filter: blur(calc(var(--abs-offset) * 1rem));
  transition: all 0.3s ease-out;

  --active: ${({ i, active }: any) => (i === active ? 1 : 0)};
  --offset: ${({ i, active }: any) => (active - i) / 3};
  --direction: ${({ i, active }: any) => Math.sign(active - i)};
  --abs-offset: ${({ i, active }: any) => Math.abs(active - i) / 3};
  pointer-events: ${({ i, active }: any) => (active === i ? 'auto' : 'none')};
  opacity: ${({ i, active }: any) => (Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1')};
  display: ${({ i, active }: any) => (Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block')};
`;

const CardWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 2rem;
  background-color: hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%));
  border-radius: 1rem;
  color: #9ca3af;
  text-align: justify;
  transition: all 0.3s ease-out;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 0.7em;
    color: #1f2937;
  }

  p,
  h2 {
    transition: all 0.3s ease-out;
    opacity: var(--active);
  }
`;

const NavButton = styled.button`
  color: white;
  font-size: 5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;

  &.left {
    transform: translateX(-100%) translatey(-50%);
  }

  &.right {
    right: 0;
    transform: translateX(100%) translatey(-50%);
  }
`;

export { CarouselWrapper, CarouselContentWrapper, CardContainerWrapper, CardWrapper, NavButton };
