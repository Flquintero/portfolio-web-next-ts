'use client';
import { GoogleTagManager } from '@next/third-parties/google';

export default function Template({ children }: { children: React.ReactNode }) {
  import('@/plugins/LogRocket');
  return (
    <main>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />
      {children}
    </main>
  );
}
