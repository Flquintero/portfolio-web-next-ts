'use client';
import { GoogleTagManager } from '@next/third-parties/google';

export default function Template({ children }: { children: React.ReactNode }) {
  import('@/plugins/LogRocket');
  return (
    <main>
      <GoogleTagManager gtmId="GTM-P7DLMF2Q" />
      {children}
    </main>
  );
}
