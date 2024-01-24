import FloatingMenu from "../../components/floatingMenu";
import CommissionPage from "./commission";

export const metadata = {
  title: "Commission",
  description:
    "E-commerce webshop for earrings and customized accesories, for non-binary queer people. Stock and commission avaialble. Instagram: @Lucha.Luchita. Website by Tina Shan",
};

export default function CommissionLayout() {
  return (
    <main className="flex min-h-screen h-full text-brandPurple bg-brandPink background-grid  selection:bg-brandLime ">
      <CommissionPage />
      <FloatingMenu />
    </main>
  );
}
