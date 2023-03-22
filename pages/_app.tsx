import "@/styles/globals.css"
import "../components/NavBar/NavBar.css"
import "../components/Profile/Profile.css"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
