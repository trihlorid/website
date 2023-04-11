import React, { useRef } from 'react';
import Image from 'next/image';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import LinkIconMobile from '../../../../public/images/arrow-mobile.svg';
import LinkIcon from '../../../../public/images/link.svg';
import SliderNavigation from '../../../components/SliderNavigation';
import { partnerGalleryMock } from '../../../mocks/partnerGallery';
import * as S from './styles';
import 'swiper/css';
import 'swiper/css/navigation';

const Partner: React.FC = () => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const animateScrollRef = useRef<HTMLDivElement>(null);
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = useCallback(() => {
  //   if (animateScrollRef.current) {
  //     if (
  //       animateScrollRef!.current!.getBoundingClientRect().top <
  //       document.documentElement.clientHeight / 2
  //     )
  //       setScrollPosition(
  //         ((animateScrollRef!.current!.getBoundingClientRect().top -
  //           document.documentElement.clientHeight / 2) /
  //           document.documentElement.clientHeight) *
  //           100,
  //       );
  //   }
  // }, []);
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, true);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll, true);
  //   };
  // }, [handleScroll]);
  return (
    <S.Partner id="partner">
      <S.PartnerContainer ref={animateScrollRef}>
        <S.Top ref={animateScrollRef} data-aos="fade-up">
          <S.Head>
            <S.TitleTop>LAOHE - наше представительство в Китае</S.TitleTop>
          </S.Head>
        </S.Top>

        <S.PartnerInner>
          <S.Title>О Партнере</S.Title>
          <S.Content>
            <S.Text>
              LAOHE - структурное подразделение компании, официально
              зарегистрированное в Китае с собственным офисом и сотрудниками в
              городе Шеньчжень. Это наша надёжная опора при работе с
              производителями товаров в Китае.
            </S.Text>
            <S.Button>
              <a href="https://laohe.io/" target="_blank" rel="noreferrer">
                Перейти на сайт LAOHE
              </a>
              <S.Icon>
                <LinkIcon viewBox="0 0 35 36" />
              </S.Icon>
              <S.IconMobile>
                <LinkIconMobile />
              </S.IconMobile>
            </S.Button>
          </S.Content>
        </S.PartnerInner>
        <S.PartnerSliderContainer>
          <S.PartnerSlider>
            <Swiper
              navigation={{
                prevEl: navigationPrevRef?.current,
                nextEl: navigationNextRef?.current,
                disabledClass: 'buttonNavDisabled',
              }}
              modules={[Navigation]}
              centeredSlides={true}
              loop={true}
              className="mySwiper"
              spaceBetween={24}
              style={{
                overflow: 'visible',
                height: '100%',
              }}
            >
              {partnerGalleryMock.map(slide => (
                <SwiperSlide
                  style={{
                    height: '100%',
                    overflow: 'hidden',
                  }}
                  key={slide.id}
                >
                  <S.SlideInner>
                    <Image src={slide.imgSrc} layout="fill" alt="miner" />
                  </S.SlideInner>
                </SwiperSlide>
              ))}
            </Swiper>
          </S.PartnerSlider>
        </S.PartnerSliderContainer>
        <S.PartnerNavigationContainer>
          <SliderNavigation
            theme="white"
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
          />
        </S.PartnerNavigationContainer>
      </S.PartnerContainer>
    </S.Partner>
  );
};

export default Partner;
