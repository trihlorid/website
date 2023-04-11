import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import About from './About';
import Contacts from './Contacts';
import Footer from './Footer';
import Header from './Header';
import TopScroll from './TopScroll';
import Modal from '../../components/Modal';
const Main = styled.div`
  overflow: hidden;
  & .fp-overflow {
    &::-webkit-scrollbar {
      display: none;
      width: 0;
    }
    scrollbar-width: none;
  }
`;

interface MainPageProps {
  startAnimation: boolean;
}

const MainPage: React.FC<MainPageProps> = ({
  startAnimation,
}: MainPageProps) => {
  const [contactIsOpen, setContactIsOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <Main>
      <Header
        setContactIsOpen={setContactIsOpen}
        contactIsOpen={contactIsOpen}
      />
      {contactIsOpen && (
        <Modal onClose={() => setContactIsOpen(false)}>
          <Contacts />
        </Modal>
      )}
      <div className="section">
        <TopScroll
          startAnimation={startAnimation}
          isScrolled={inView}
        ></TopScroll>
        {/*<Top startAnimation={startAnimation} isScrolled={inView}></Top>*/}
      </div>
      <div className="section" ref={ref}>
        <About />
        <Footer />
      </div>
    </Main>
  );
};

export default MainPage;
