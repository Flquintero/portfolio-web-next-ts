'use client';
import Script from 'next/script';
const Logrocket = () => {
  if (typeof window != 'undefined') {
    return (
      <>
        <Script src="https://cdn.logr-ingest.com/LogRocket.min.js" />
        <Script id="logrocket">
          {`window.LogRocket && window.LogRocket.init('${process.env.NEXT_PUBLIC_LOGROCKET_ID}')`}
        </Script>
      </>
    );
  }
};

export default Logrocket;
