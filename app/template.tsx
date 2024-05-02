'use client';
export default function Template({ children }: { children: React.ReactNode }) {
  import('@/plugins/LogRocket');
  return <main>{children}</main>;
}
