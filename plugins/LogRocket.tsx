'use client';
import Script from 'next/script';
const Logrocket = () => {
  if (typeof window != 'undefined') {
    return (
      <>
        <Script
          src="https://cdn.logr-ingest.com/LogRocket.min.js"
          strategy="lazyOnload"
        />
        <Script id="logrocket" strategy="lazyOnload">
          {`window.LogRocket && window.LogRocket.init('${process.env.NEXT_PUBLIC_LOGROCKET_ID}')`}
        </Script>
      </>
    );
  }
};

export default Logrocket;
