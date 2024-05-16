import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AppShell from '@/components/layout/AppShell';
import Hero from "@/components/layout/Hero/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <AppShell>
    <Component {...pageProps} />
    <Hero/>
  </AppShell>
  )
}
