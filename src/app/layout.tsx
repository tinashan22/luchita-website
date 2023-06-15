import "./globals.css";
import { Righteous, Roboto } from "next/font/google";

const righteous = Righteous({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-righteous",
});

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${righteous.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
