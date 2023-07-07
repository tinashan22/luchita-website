import Link from "next/link";

export default function MobileNav() {
  return (
    <div>
      <div className="bg-brandLime h-14 min-w-full top-0 fixed flex items-center justify-center border-b border-brandPurple z-10 selection:bg-brandCream">
        {" "}
        <Link href="/">
          {" "}
          <p className={`font-righteous text-xl text-brandPurple`}>
            Lucha Luchita
          </p>
        </Link>{" "}
      </div>
    </div>
  );
}
