import React from 'react';
import ArrowSlider from '/public/images/arrow-slider.svg';
import * as S from './styles';

interface SliderNavigationProps {
  navigationPrevRef: React.ForwardedRef<HTMLDivElement>;
  navigationNextRef: React.ForwardedRef<HTMLDivElement>;
  theme?: 'black' | 'white';
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
  navigationPrevRef,
  navigationNextRef,
  theme,
}: SliderNavigationProps) => (
  <S.NavigationContainer theme={theme}>
    <S.ButtonNav type="prev" ref={navigationPrevRef} theme={theme}>
      <ArrowSlider />
    </S.ButtonNav>
    <S.ButtonNav type="next" ref={navigationNextRef} theme={theme}>
      <ArrowSlider />
    </S.ButtonNav>
  </S.NavigationContainer>
);
SliderNavigation.displayName = 'SliderNavigation';
export default SliderNavigation;
