import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import LinkIcon from '../../../../public/images/qr.png';

const Contacts: React.FC = () => (
  <S.Contacts id="contacts">
    <S.ContactsContainer>
      <S.ContactsList>
        <S.ContactItem>
          <S.ContactLink href="https://t.me/sultanovis">
            <S.ItemText>Telegram</S.ItemText>
            <S.ContactInfo>
              <S.ItemName>t.me/sultanovis</S.ItemName>
              <S.Icon>
                <Image src="/images/link.svg" layout="fill" alt="link" />
              </S.Icon>
            </S.ContactInfo>
          </S.ContactLink>
        </S.ContactItem>
        <S.ContactItem>
          <S.ContactLink href="trihlorid@yandex.ru">
            <S.ItemText>E-mail</S.ItemText>
            <S.ContactInfo>
              <S.ItemName>trihlorid@yandex.ru</S.ItemName>
              <S.Icon>
                <Image src="/images/link.svg" layout="fill" alt="link" />
              </S.Icon>
            </S.ContactInfo>
          </S.ContactLink>
        </S.ContactItem>
        <S.ContactItem>
          <S.ContactLink href="tel:+7 925 837 91 72">
            <S.ItemText>Телефон</S.ItemText>
            <S.ContactInfo>
              <S.ItemName>+7 925 837 91 72 </S.ItemName>
              <S.Icon>
                <Image src="/images/link.svg" layout="fill" alt="link" />
              </S.Icon>
            </S.ContactInfo>
          </S.ContactLink>
        </S.ContactItem>
        {/*<S.ContactItem>*/}
        {/*  <S.ContactLink*/}
        {/*    href="https://yandex.ru/maps/-/CCUV52ettB"*/}
        {/*    target="_blank"*/}
        {/*  >*/}
        {/*    <S.ItemText>Адрес офиса</S.ItemText>*/}
        {/*    <S.ContactInfo>*/}
        {/*      <S.ItemName>*/}
        {/*        Россия, Москва, Пресненская набережная, 12, офис 6703*/}
        {/*      </S.ItemName>*/}
        {/*      <S.Icon>*/}
        {/*        <Image src="/images/link.svg" layout="fill" alt="link" />*/}
        {/*      </S.Icon>*/}
        {/*    </S.ContactInfo>*/}
        {/*  </S.ContactLink>*/}
        {/*</S.ContactItem>*/}
      </S.ContactsList>
    </S.ContactsContainer>
  </S.Contacts>
);

export default Contacts;
