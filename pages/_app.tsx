import '../styles/globals.css';
import 'swiper/css';
import React, { useState } from 'react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const [startAnimation] = useState(true);
  return (
    <>
      <Component {...pageProps} startAnimation={startAnimation} />
    </>
  );
}

export default MyApp;
