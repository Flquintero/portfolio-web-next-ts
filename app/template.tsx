'use client';
import { GoogleTagManager } from '@next/third-parties/google';
import('@/plugins/LogRocket');

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />
      {children}
    </main>
  );
}
