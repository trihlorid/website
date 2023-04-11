import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import * as S from './styles';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }: ModalProps) => {
  const [isClose, setIsClose] = useState(false);
  const modalClose = useCallback(() => {
    setIsClose(true);
    onClose();
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <S.Modal isClose={isClose}>
      <S.ModalOverlay>
        <S.ModalContainer>
          <S.HeaderModal>
            <S.ButtonClose onClick={modalClose}>Закрыть [Х]</S.ButtonClose>
          </S.HeaderModal>
          {children}
        </S.ModalContainer>
      </S.ModalOverlay>
    </S.Modal>
  );
};

export default Modal;
