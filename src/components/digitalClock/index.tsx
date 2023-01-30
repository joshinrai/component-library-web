import React, { memo, useRef, useState, useEffect } from 'react';
import { Wrapper, TimerWrapper, TimerText, TimerCharWrapper, TimerCharSlider, TimerCharSliderOption } from './styles';

interface TimerCharProps {
  char: string;
}

const TimerChar: React.FC<TimerCharProps> = (props: TimerCharProps) => {
  const ref: any = useRef<HTMLDivElement>(null);

  const colon: boolean = props.char === ":";

  if(colon) {
    return (
      <TimerCharWrapper className="colon">:</TimerCharWrapper>
    );
  }

  const number: number = parseInt(props.char);

  const getCharSlider = (): JSX.Element => {
    let options: JSX.Element[] = [];

    for(let i: number = 0; i <= 9; i++) {
      options.push(<TimerCharSliderOption key={i} className={number === i ? 'active' : ''}>{i}</TimerCharSliderOption>);
    }

    const height: number = ref.current ? ref.current.offsetHeight : 0;

    return (
      <TimerCharSlider top={`${number * height * -1}px`}>{options}</TimerCharSlider>
    );
  }

  return (
    <TimerCharWrapper ref={ref} className="number">{getCharSlider()}</TimerCharWrapper>
  )
}

const Timer: React.FC = () => {
  const [date, setDateTo] = useState<Date>(new Date());

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      const update: Date = new Date();

      if(update.getSeconds() !== date.getSeconds()) {
        setDateTo(update);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    }
  }, [date]);

  const formatSegment = (segment: number): string | number => (segment < 10 ? `0${segment}` : segment);

  const getHours = (hours: number): number => (hours % 12 === 0 ? 12 : hours % 12);

  const getTime = (): string => {
    const hours: number = +getHours(date.getHours()),
          minutes: number = +date.getMinutes(),
          seconds: number = +date.getSeconds();

    return `${formatSegment(hours)}:${formatSegment(minutes)}:${formatSegment(seconds)}`;
  }

  const getChars = (): JSX.Element[] => {
    return getTime().split("").map((char: string, index: number) => (
      <TimerChar key={index} char={char} />
    ));
  }

  return(
    <TimerWrapper>
      <TimerText>{getChars()}</TimerText>
    </TimerWrapper>
  )
}

const DigitalClock: React.FC<any> = () => {
  return (
    <Wrapper>
      <Timer />
    </Wrapper>
  )
};

export default memo(DigitalClock);
