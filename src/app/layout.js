import { Rubik, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ 
  subsets: ["latin"],
  preload: true,
 });

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  preload: true, 
});

export const metadata = {
  title: "KDUN - Software Developer Portfolio",
  description: "",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${rubik.className} ${jetbrains.className}`}>{children}</body>
    </html>
  );
}
