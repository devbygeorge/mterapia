import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Manrope } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { useDisableBodyScrollOnModal } from "@/hooks";

const manrope = Manrope({
  subsets: ["latin"],
});

declare global {
  interface Window {
    calendar: {
      schedulingButton: {
        load: (options: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement | null;
        }) => void;
      };
    };
  }
}

function loadCalendarButton(label: string, target: HTMLElement | null) {
  window.calendar.schedulingButton.load({
    url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Y9RJLiLyj20Fjf8T5tSvUv_quaao1x-iT33mJNsJsoh05VZD-DarvxsdecuWhBB9rZBFC3w83?gv=true",
    color: "#0f172b",
    label: label,
    target: target as HTMLElement,
  });
}

export default function App({ Component, pageProps }: AppProps) {
  useDisableBodyScrollOnModal();

  const initCalendarButtons = () => {
    const navCalendarBtn = document.getElementById("nav-calendar-btn");
    const calendarBtn = document.getElementById("calendar-btn");
    loadCalendarButton("დაჯავშნა", navCalendarBtn);
    loadCalendarButton("სესიის დაჯავშნა", calendarBtn);
  };

  return (
    <>
      <Head>
        <link
          href="https://calendar.google.com/calendar/scheduling-button-script.css"
          rel="stylesheet"
        />
      </Head>
      <div className={manrope.className}>
        <Component {...pageProps} />
        <Script
          src="https://calendar.google.com/calendar/scheduling-button-script.js"
          strategy="afterInteractive"
          onLoad={initCalendarButtons}
        />
      </div>
    </>
  );
}
