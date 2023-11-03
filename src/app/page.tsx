import Image from "next/image";
import ShopPage from "./shop";
import MobileNav from "../components/nav";
import FloatingMenu from "../components/floatingMenu";
import { AuthProvider } from "@/context/authContext";

export default function Home() {
  return (
    <main className="flex min-h-screen  text-brandPurple selection:bg-brandPink">
      {/* <AuthProvider> */}
      <ShopPage />
      <FloatingMenu />
      {/* </AuthProvider> */}
    </main>
  );
}
