import React, { useState } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import {
  CarouselWrapper,
  CarouselContentWrapper,
  CardContainerWrapper,
  CardWrapper,
  NavButton,
} from './styles';

const CARDS = 10;

const Card = ({ title, content }: any) => (
  <CardWrapper>
    <h2>{title}</h2>
    <p>{content}</p>
  </CardWrapper>
);

const CarouselContent = ({ children }: any) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <CarouselContentWrapper>
      {active > 0 && (
        <NavButton className="left" onClick={() => setActive(i => i - 1)}>
          <TiChevronLeftOutline />
        </NavButton>
      )}
      {React.Children.map(children, (child, i) => (
        <CardContainerWrapper i={i} active={active}>
          {child}
        </CardContainerWrapper>
      ))}
      {active < count - 1 && (
        <NavButton className="right" onClick={() => setActive(i => i + 1)}>
          <TiChevronRightOutline />
        </NavButton>
      )}
    </CarouselContentWrapper>
  );
};
const Carousel: React.FC<any> = () => (
  <CarouselWrapper>
    <CarouselContent>
      {[...new Array(CARDS)].map((_, i) => (
        <Card title={'Card ' + (i + 1)} content="内容" key={`${+new Date()}_${i}`} />
      ))}
    </CarouselContent>
  </CarouselWrapper>
);

export default Carousel;
