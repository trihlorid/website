import React from 'react';
import Link from 'next/link';
import * as S from './styles';

const NotFoundPage: React.FC = () => (
  <S.NotFoundPage>
    <S.NotFoundPageContainer>
      <S.Line></S.Line>
      <Link href="/">
        <S.Button> Вернуться на главную</S.Button>
      </Link>
      <S.CountContainer>
        <S.CountText>Страница не найдена</S.CountText>
        <S.Count>[404]</S.Count>
      </S.CountContainer>
    </S.NotFoundPageContainer>
  </S.NotFoundPage>
);

export default NotFoundPage;
