'use client';

import Script from 'next/script';
const Logrocket = () => {
  return (
    <>
      <Script src="https://cdn.logr-ingest.com/LogRocket.min.js" />
      <Script id="logrocket">
        {`window.LogRocket && window.LogRocket.init(${process.env.LOGROCKET_ID});`}
      </Script>
    </>
  );
};

export default Logrocket;
