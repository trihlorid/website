import React, { useRef, useState } from 'react';
import { Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderNavigation from '../../../components/SliderNavigation';
import { featuresMock } from '../../../mocks/features';
import * as S from './styles';
import 'swiper/css';
import 'swiper/css/navigation';
import ArrowDown from '/public/images/arrow-down.svg';

const Features: React.FC = () => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  return (
    <S.Features id="projects">
      <S.FeaturesContainer>
        <S.FeaturesInner>
          <S.FeaturesLeft>
            <S.Title>[ Наши проекты ]</S.Title>
            <S.NavigationContainer>
              <SliderNavigation
                theme="white"
                navigationPrevRef={navigationPrevRef}
                navigationNextRef={navigationNextRef}
              />
            </S.NavigationContainer>
          </S.FeaturesLeft>
          <S.FeatureSliderContainer>
            <S.FeatureSlider>
              <Swiper
                navigation={{
                  prevEl: navigationPrevRef?.current,
                  nextEl: navigationNextRef?.current,
                  disabledClass: 'buttonNavDisabled',
                }}
                modules={[Navigation, Mousewheel]}
                className="mySwiper"
                mousewheel={true}
                spaceBetween={24}
                style={{
                  overflow: 'visible',
                }}
              >
                {featuresMock.map(slide => (
                  <SwiperSlide key={slide.id}>
                    <S.SlideTitle>{slide.title}</S.SlideTitle>
                    <S.SlideText>{slide.text}</S.SlideText>
                  </SwiperSlide>
                ))}
              </Swiper>
            </S.FeatureSlider>
          </S.FeatureSliderContainer>
          <S.MobileItems isVisible>
            {featuresMock.slice(0, 2).map(item => (
              <S.MobileItem key={item.id}>
                <S.MobileItemTitle>{item.title}</S.MobileItemTitle>
                <S.MobileItemText>{item.text}</S.MobileItemText>
              </S.MobileItem>
            ))}
          </S.MobileItems>
          <S.MobileItems isVisible={featuresVisible}>
            {featuresMock.slice(3).map(item => (
              <S.MobileItem key={item.id}>
                <S.MobileItemTitle>{item.title}</S.MobileItemTitle>
                <S.MobileItemText>{item.text}</S.MobileItemText>
              </S.MobileItem>
            ))}
          </S.MobileItems>
          <S.ButtonMore
            isVisible={!featuresVisible}
            onClick={() => setFeaturesVisible(true)}
          >
            <span>Показать все проекты</span> <ArrowDown viewBox="0 0 8 10" />
          </S.ButtonMore>
        </S.FeaturesInner>
      </S.FeaturesContainer>
    </S.Features>
  );
};

export default Features;
