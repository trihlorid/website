import React, { useEffect } from 'react';
import AOS from 'aos';
import * as S from './styles';
import Features from '../Features';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="about">
      <S.About>
        <S.AboutContainer>
          <S.AboutInner>
            <S.Title>[ О нас ]</S.Title>
            <S.Text data-aos="fade-up">
              Компания ComplexSoftPro выполняет сложные индивидуальные проекты в
              области цифровизации бизнеса
            </S.Text>
            <S.Text></S.Text>
            <S.TextSm data-aos="fade-up" data-aos-delay="100">
              <p>
                ComplexSoftPro предлагает полный цикл разработки программного
                обеспечения на&nbsp;заказ: от&nbsp;бизнес-анализа и&nbsp;дизайна
                до&nbsp;тестирования и&nbsp;поддержки. Наша команда разработала
                и&nbsp;внедрила множество программных решений разного размера
                и&nbsp;сложности.
              </p>
              <p>
                Среди наших клиентов как небольшие и&nbsp;средние компании, так
                и&nbsp;огромные корпорации из&nbsp;самых разных отраслей:
                производства, нефтепереработки, металлообработки, электронной
                коммерции, банков и&nbsp;других.
              </p>
            </S.TextSm>
          </S.AboutInner>
        </S.AboutContainer>
      </S.About>
      <Features />
    </div>
  );
};

export default About;
