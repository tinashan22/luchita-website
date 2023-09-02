import AccountPage from "./createAccount";

export default function AccountLayout() {
  return (
    <main className="min-h-screen pt-8 bg-brandCream  selection:bg-brandPink text-brandPurple w-screen px-6 ">
      <AccountPage />
      {/* <FloatingMenu /> */}
    </main>
  );
}
