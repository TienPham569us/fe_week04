import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles.css";
import { ReduxProvider } from "@/lib/redux/provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}