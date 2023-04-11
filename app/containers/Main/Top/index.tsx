import React, { useCallback, useEffect, useRef, useState } from 'react';
// import Image from 'next/future/image';
import Image from 'next/image';
// @ts-ignore
import Prallax from 'react-rellax';
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
    <>
      <S.Top id="main">
        <div>
          {!isScrolled && (
            <S.Head>
              <S.TitleTop transformValue={scrollPosition * 4}>
                <S.AnimateTextToLeft startAnimation={startAnimation}>
                  Продажа
                </S.AnimateTextToLeft>
              </S.TitleTop>
              <S.TitleBottom transformValue={scrollPosition * 4}>
                <S.AnimateTextToRight startAnimation={startAnimation}>
                  Оборудования
                </S.AnimateTextToRight>
              </S.TitleBottom>
            </S.Head>
          )}

          <S.ImagesContainer
            startAnimation={startAnimation}
            ref={animateScrollRef}
          >
            <S.ImageContainer>
              <Image
                src="/images/top_image_1.png"
                layout="fill"
                alt="miner"
                priority
              />
            </S.ImageContainer>
            <S.ImageContainerGreen opacityValue={scrollPosition / 1.5}>
              <Image
                src="/images/top_image_2.png"
                layout="fill"
                alt="miner"
                priority
              />
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

          <S.ClickToContacts href="https://t.me/laomining" target="_blank">
            <S.CodeImageContainer>
              <Image src="/images/qr_code.png" alt="qr code" layout="fill" />
            </S.CodeImageContainer>
            <S.CodeText>[tg]</S.CodeText>
          </S.ClickToContacts>
        </div>
      </S.Top>
      <S.Hero id="main">
        <S.Container>
          <S.Left>
            <S.LeftText data-aos="zoom-in" data-aos-duration="500">
              Мы&nbsp;помогаем бизнесу <br />
              с&nbsp;цифровизацией
            </S.LeftText>
          </S.Left>
          <S.Right>
            <Prallax speed={3} data-aos="zoom-in-left" data-aos-duration="300">
              <S.HeroImageContainer data-aos="fade-right">
                <Image
                  src="/images/top_image_2.png"
                  alt="miner"
                  width={1000}
                  height={1000}
                  prefix="%"
                />
              </S.HeroImageContainer>
            </Prallax>
          </S.Right>
        </S.Container>
        {!isScrolled && (
          <S.ClickToScroll href={'/#about'}>
            <Image
              src={'/images/forward.svg'}
              alt="click to scroll"
              width={14}
              height={16}
            />
          </S.ClickToScroll>
        )}
        {/*<S.ClickToContacts href="https://t.me/laomining" target="_blank">*/}
        {/*  <S.CodeImageContainer>*/}
        {/*    <Image src="/images/qr_code.png" alt="qr code" layout="fill" />*/}
        {/*  </S.CodeImageContainer>*/}
        {/*  <S.CodeText>[tg]</S.CodeText>*/}
        {/*</S.ClickToContacts>*/}
      </S.Hero>
    </>
  );
};

Top.displayName = 'Top';
export default Top;
