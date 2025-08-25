import localFont from "next/font/local";

export const firaGO = localFont({
  src: [
    {
      path: "./FiraGO/FiraGO-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./FiraGO/FiraGO-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./FiraGO/FiraGO-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./FiraGO/FiraGO-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./FiraGO/FiraGO-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./FiraGO/FiraGO-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-firaGO",
  display: "swap",
});
