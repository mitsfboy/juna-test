import type { AppProps } from 'next/app'
import { StoresProvider } from '@/context/StoresProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoresProvider>
      <Component {...pageProps} />
    </StoresProvider>
  )
}
