import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgb(30, 30, 30);
  margin: 0px;
  overflow: hidden;
  padding: 0px;

  input, h1, a, span {
    color: rgb(90, 90, 90);
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    margin: 0px;
    padding: 0px;
  }

  height: 40vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimerWrapper = styled.div`
  background: linear-gradient(to bottom right, rgba(2, 99, 225, 1.0), rgba(235, 24, 54, 1.0));
  border-radius: 22px;
`;

const TimerText = styled.div`
  align-items: center;
  background-color: rgb(30, 30, 30);
  border-radius: 20px;
  display: flex;
  margin: 4px;
  padding: 0px 20px;
`;

const TimerCharWrapper: any = styled.h1`
  height: 150px;
  position: relative;
  text-align: center;
  width: 80px;

  &.colon {
    color: white;
    font-size: 3em;
    line-height: 150px;
  }
`;

const TimerCharSlider: any = styled.div`
  display: flex;
  flex-direction: column;
  left: 0px;
  position: absolute;
  top: 0px;
  transition: top 200ms;
  width: 80px;

  top: ${({ top }: any) => top};
`;

const TimerCharSliderOption = styled.span`
  color: white;
  font-size: 2em;
  height: 150px;
  line-height: 150px;
  opacity: 0.05;
  transition: opacity 400ms, font-size 400ms;
  width: 80px;

  &.active {
    font-size: 3em;
    opacity: 1;
  }
`;

export {
  Wrapper,
  TimerWrapper,
  TimerText,
  TimerCharWrapper,
  TimerCharSlider,
  TimerCharSliderOption,
};
