import Image from "next/image";
import ShopPage from "./shop";
import MobileNav from "./components/nav";

export default function Home() {
  return (
    <main className="flex min-h-screen  text-brandPurple">
      <MobileNav />
      <ShopPage />
    </main>
  );
}
