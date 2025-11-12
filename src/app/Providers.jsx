"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from "./theme";

// Create a client-side Emotion cache with prepend:true so that MUI styles are inserted
// before other styles. This helps keep style order consistent between server and client
// and reduces hydration mismatches.
const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

export default function Providers({ children }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}