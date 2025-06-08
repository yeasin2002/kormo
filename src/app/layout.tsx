import { fontVariables } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

import './globals.css';
import { RootWrapper } from './root-wrapper';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`antialiased`, fontVariables)}>
        <RootWrapper>{children}</RootWrapper>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Kormo Setu',
  description: 'Find all tech companies in Bangladesh',
};
