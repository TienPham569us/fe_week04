import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles.css";
import { ReduxProvider } from "@/lib/redux/provider";
import { AuthWrapper } from "@/components/AuthWrapper";

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
        <ReduxProvider> <AuthWrapper>{children}</AuthWrapper></ReduxProvider>
        
      </body>
    </html>
  );
}
