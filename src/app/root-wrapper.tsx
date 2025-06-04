import { IconoirProvider } from "iconoir-react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { EdgeStoreProvider } from "../lib/edgestore";

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
        <EdgeStoreProvider>
          {children}
          <Toaster />
        </EdgeStoreProvider>
      </IconoirProvider>
    </NextThemesProvider>
  );
};
