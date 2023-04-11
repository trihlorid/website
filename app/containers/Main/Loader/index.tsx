import React, { useState } from 'react';
import * as S from './styles';
interface LoaderProps {
  setStartAnimation: (b: boolean) => void;
  startAnimation: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  setStartAnimation,
  startAnimation,
}: LoaderProps) => {
  const [currVal, setCurrVal] = useState(0);
  const [loadStatus, setLoadStatus] = useState('loading');
  const [speed, setSpeed] = useState(70);
  React.useEffect(() => {
    if (document.readyState === 'complete') {
      setLoadStatus('onload');
    }
  }, [document.readyState]);

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
    document.body.style.overflow = 'hidden';
  }, [loadStatus]);

  React.useEffect(() => {
    if (loadStatus === 'onload' && currVal === 100) {
      setStartAnimation(true);
      document.body.style.overflow = 'auto';
    }
  }, [loadStatus, currVal, setStartAnimation]);
  React.useEffect(() => {
    if (loadStatus === 'onload') {
      setSpeed(20);
    }
  }, [loadStatus]);
  React.useEffect(() => {
    currVal !== 100 && setTimeout(setCurrVal, speed, currVal + 1);
    currVal === 100 && setLoadStatus('onload');
  }, [currVal, speed]);
  return (
    <S.Loader remove={startAnimation}>
      <S.LoaderContainer remove={startAnimation}>
        <S.Line remove={startAnimation}></S.Line>
        <S.Square remove={startAnimation}></S.Square>
        <S.CountContainer remove={startAnimation}>
          <S.CountText>Сайт загружается</S.CountText>
          <S.Count>[{currVal}%]</S.Count>
        </S.CountContainer>
      </S.LoaderContainer>
    </S.Loader>
  );
};

export default Loader;
