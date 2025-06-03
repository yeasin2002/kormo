import { IconoirProvider } from "iconoir-react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const RootWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider
      // attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <IconoirProvider
        iconProps={{ strokeWidth: 2, width: "1em", height: "1em" }}
      >
        {children}
      </IconoirProvider>
    </NextThemesProvider>
  );
};

