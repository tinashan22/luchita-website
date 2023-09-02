import FloatingMenu from "@/components/floatingMenu";
import ProfilePage from "./profile";

export default function ProfileLayout() {
  return (
    <main className="min-h-screen pt-8 bg-brandCream  selection:bg-brandPink text-brandPurple w-screen px-6 ">
      <ProfilePage />
      <FloatingMenu />
    </main>
  );
}
