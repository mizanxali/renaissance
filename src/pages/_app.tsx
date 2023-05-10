import "@/styles/globals.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {
        primary: "#4ADE7B",
        secondary: "#F9CB80",
        error: "#FCC5D8",
      },
    },
  });

  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
