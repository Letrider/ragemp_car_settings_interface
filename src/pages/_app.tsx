'use client';
import { EventListener } from "@/features/events/ui/EventListener";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

if (typeof window !== "undefined") {
  (window as any).mp = (window as any).mp || {
    trigger: (...args: any) => console.log('[Mock mp.trigger]', ...args),
    events: {
      add: (name: string, _cb: any) =>
        console.log(`[Mock mp.events.add] Event added: ${name}`),
      remove: (name: string, _cb: any) =>
        console.log(`[Mock mp.events.remove] Event removed: ${name}`),
      call: (name: string, ...args: any) =>
        console.log(`[Mock mp.events.call] Event called: ${name}`, ...args),
    },
  };
}

export default function App({ Component, pageProps }: AppProps) {



  return (
    <>
      <EventListener />
      <Component {...pageProps} />
    </>
  );
}
