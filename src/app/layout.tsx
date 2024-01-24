import GlobalNav from "@/components/nav";
import "./globals.css";
import { EB_Garamond, Righteous, Roboto } from "next/font/google";
import { AuthProvider } from "@/context/authContext";
import CartProvider from "@/context/cartProvider";

const righteous = Righteous({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-righteous",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const garamond = EB_Garamond({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
});

export const metadata = {
  title: {
    default: "Shop Lucha Luchita",
    template: "%s | Lucha Luchita",
  },
  description:
    "E-commerce webshop for earrings and customized accesories, for non-binary queer people. Stock and commission avaialble. Instagram: @Lucha.Luchita. Website by Tina Shan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${righteous.variable} ${roboto.variable} ${garamond.variable}`}
      >
        <AuthProvider>
          <CartProvider>
            <GlobalNav />
            <div className="mt-14"> {children}</div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
