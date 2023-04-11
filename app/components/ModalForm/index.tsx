import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import * as S from './styles';

interface ModalFormProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({
  children,
  onClose,
}: ModalFormProps) => {
  const [isClose, setIsClose] = useState(false);
  const modalClose = useCallback(() => {
    setIsClose(true);
    onClose();
  }, [onClose]);
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

export default ModalForm;
