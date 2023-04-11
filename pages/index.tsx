import type { NextPage } from 'next';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Main from '../app/containers/Main';

interface HomePageProps {
  startAnimation: boolean;
}

const Home: NextPage<HomePageProps> = ({ startAnimation }: HomePageProps) => (
  <>
    <Head>
      <title>ComplexSoftPro</title>
    </Head>
    <Main startAnimation={startAnimation} />
  </>
);

export default Home;
