import LoginPage from "./login";

export default function LoginLayout({
  params,
}: {
  params: { email?: string };
}) {
  return (
    <main className="min-h-screen pt-8 bg-brandCream  selection:bg-brandPink text-brandPurple w-screen px-6 ">
      <LoginPage prefilledEmail={params.email} />
    </main>
  );
}
