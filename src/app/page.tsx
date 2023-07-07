import Image from "next/image";
import ShopPage from "./shop";
import MobileNav from "../components/nav";
import FloatingMenu from "../components/floatingMenu";

export default function Home() {
  return (
    <main className="flex min-h-screen  text-brandPurple selection:bg-brandPink">
      <ShopPage />
      <FloatingMenu />
    </main>
  );
}
