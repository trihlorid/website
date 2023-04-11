import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as S from './styles';

export type TopProps = {
  startAnimation: boolean;
  isScrolled: boolean;
};

const INITIAL_POSITION = 80;

const Top: React.FC<TopProps> = ({ startAnimation, isScrolled }: TopProps) => {
  const animateScrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollRefHeight, setScrollRefHeight] = useState(0);
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    if (startAnimation) {
      setScrollPosition(0);
    }
  }, [startAnimation]);

  useEffect(() => {
    if (animateScrollRef.current) {
      if (animateScrollRef.current.getBoundingClientRect().height > 0) {
        setScrollRefHeight(
          animateScrollRef.current.getBoundingClientRect().height,
        );
      }
    }
  }, []);

  useEffect(() => {
    if (animateScrollRef.current) {
      if (animateScrollRef.current.getBoundingClientRect().height > 0) {
        setDistance(
          scrollRefHeight -
            document.documentElement.clientHeight +
            INITIAL_POSITION,
        );
      }
    }
  }, [scrollRefHeight]);

  const handleScroll = useCallback(() => {
    if (animateScrollRef.current) {
      if (animateScrollRef.current.getBoundingClientRect().height > 0) {
        setScrollPosition(
          ((INITIAL_POSITION -
            animateScrollRef!.current!.getBoundingClientRect().top) /
            distance) *
            100,
        );
      }
    }
  }, [distance]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <S.Top id="main">
      <div>
        {!isScrolled && (
          <S.Head>
            <S.TitleTop transformValue={scrollPosition * 4}>
              <S.AnimateTextToLeftOne startAnimation={startAnimation}>
                IT-РЕШЕНИЯ
              </S.AnimateTextToLeftOne>
            </S.TitleTop>
            <S.TitleBottom transformValue={scrollPosition * 4}>
              <S.AnimateTextToRight startAnimation={startAnimation}>
                IT-ПРОДУКТЫ
              </S.AnimateTextToRight>
            </S.TitleBottom>
            <S.TitleTop transformValue={scrollPosition * 4}>
              <S.AnimateTextToLeftToo startAnimation={startAnimation}>
                ДЛЯ БИЗНЕСА
              </S.AnimateTextToLeftToo>
            </S.TitleTop>
          </S.Head>
        )}

        <S.ImagesContainer
          startAnimation={startAnimation}
          ref={animateScrollRef}
        >
          <S.BottomText data-aos="zoom-in" data-aos-duration="500">
            Мы&nbsp;помогаем бизнесу <br />
            с&nbsp;цифровизацией
          </S.BottomText>
          <S.ImageContainer>
            {/*<Image*/}
            {/*  src="/images/top_image_1.png"*/}
            {/*  layout="fill"*/}
            {/*  alt="miner"*/}
            {/*  priority*/}
            {/*/>*/}
          </S.ImageContainer>
          <S.ImageContainerGreen opacityValue={scrollPosition / 1.5}>
            {/*<Image*/}
            {/*  src="/images/top_image_2.png"*/}
            {/*  layout="fill"*/}
            {/*  alt="miner"*/}
            {/*  priority*/}
            {/*/>*/}
          </S.ImageContainerGreen>
        </S.ImagesContainer>
        {!isScrolled && (
          <S.ClickToScroll href={'/#about'}>
            <Image
              src={'/images/forward.svg'}
              alt="click to scroll"
              layout="fill"
            />
          </S.ClickToScroll>
        )}

        {/*<S.ClickToContacts href="https://t.me/laomining" target="_blank">*/}
        {/*  <S.CodeImageContainer>*/}
        {/*    <Image src="/images/qr_code.png" alt="qr code" layout="fill" />*/}
        {/*  </S.CodeImageContainer>*/}
        {/*  <S.CodeText>[tg]</S.CodeText>*/}
        {/*</S.ClickToContacts>*/}
      </div>
    </S.Top>
  );
};

Top.displayName = 'Top';
export default Top;
