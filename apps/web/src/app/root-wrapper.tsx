'use client';

import { EdgeStoreProvider } from '@/lib/edgestore';
import { IconoirProvider } from 'iconoir-react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

export const RootWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider
      // attribute="class"
      defaultTheme="light"
      enableSystem={false}
      forcedTheme="light"
    >
      {/* <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}> */}
      <IconoirProvider iconProps={{ strokeWidth: 2, width: '1em', height: '1em' }}>
        <EdgeStoreProvider>
          {children}
          <Toaster />
        </EdgeStoreProvider>
      </IconoirProvider>
      {/* </GoogleReCaptchaProvider> */}
    </NextThemesProvider>
  );
};
