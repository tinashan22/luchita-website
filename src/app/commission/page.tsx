import Image from "next/image";

import MobileNav from "../../components/nav";
import FloatingMenu from "../../components/floatingMenu";
import CommissionPage from "./commission";

export default function Commission() {
  return (
    <main className="flex min-h-screen  text-brandPurple">
      <MobileNav />
      <CommissionPage />
      <FloatingMenu />
    </main>
  );
}
