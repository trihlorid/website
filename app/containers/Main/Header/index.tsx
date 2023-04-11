import React, { useState } from 'react';
import { useScrollspy } from '../../../hooks/useScrollspy';
import { headerItems } from './data';
import * as S from './styles';
import LogoIcon from '/public/images/logo.svg';

interface HeaderProps {
  setContactIsOpen: (b: boolean) => void;
  contactIsOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({
  setContactIsOpen,
  contactIsOpen,
}: HeaderProps) => {
  const [navActive, setNavActive] = useState(headerItems[0].name);
  const ids = ['main', 'about', 'models', 'partner'];
  const activeId = useScrollspy(ids, 54);
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.Logo>
          {/*<S.LogoIconContainer>*/}
          {/*  <LogoIcon />*/}
          {/*</S.LogoIconContainer>*/}
          <S.LogoText>ComplexSoftPro</S.LogoText>
        </S.Logo>
        <S.Menu>
          {headerItems.map(item => (
            <S.HeaderItem
              key={item.value}
              href={`/#${item.value}`}
              onClick={() => setNavActive(item.name)}
              className={`menu-link ${
                item.value === activeId && 'menu-link-active'
              }`}
            >
              {navActive === item.name}
              {item.name}
            </S.HeaderItem>
          ))}
        </S.Menu>
        <S.HeaderButton onClick={() => setContactIsOpen(!contactIsOpen)}>
          Свяжитесь с нами
        </S.HeaderButton>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
