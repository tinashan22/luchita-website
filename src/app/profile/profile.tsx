"use client";

import LargeButton from "@/components/buttonLarge";
import { ButtonType } from "@/constants";
import { AuthContext } from "@/context/authContext";
import { UserRecord } from "@/interfaces";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function ProfilePage() {
  const { currentUserRecord, signOut } = useContext(AuthContext);

  const [hasAuthError, setAuthError] = useState<boolean>(false);
  const [userRecord, setUserRecord] = useState<UserRecord>();

  const date: Date = new Date(currentUserRecord?.createdAt ?? "");
  const router = useRouter();

  return (
    <div>
      <div className="font-righteous font-medium text-xl">
        Hi, {currentUserRecord?.name}!
      </div>

      <div className="font-roboto text-sm pt-1">
        {" "}
        You've been a lucha luchita member since {date.getMonth().toString()}/
        {date.getDate().toString()}/{date.getFullYear().toString()}.
      </div>
      <div className="border border-dashed rounded-lg p-8 mt-8 border-brandPurple">
        {" "}
        <div className="font-righteous text-xl text-center">
          Saved designs feature coming soon 💌
        </div>
      </div>

      <div className="flex-col">
        <div className="pt-8 font-righteous text-lg">Shipping</div>

        <div className="pt-1 font-roboto text-sm ">
          Stock items ship within 2-4 business days
        </div>
        <div className="pt-1 font-roboto text-sm ">
          Customization and commission lead time depends on design{" "}
        </div>
        <div className="pt-8 font-righteous text-lg ">Care Instructions</div>
        <div className="pt-1 font-roboto text-sm ">
          Please handle these hand-crafted items with care
        </div>
        <div className="pt-1 font-roboto text-sm ">
          Do not apply excessive force or heat{" "}
        </div>
        <div className="pt-1 font-roboto text-sm ">
          All items are splash-proof, but please do not take them into the
          shower or the pool with you{" "}
        </div>
      </div>

      <div className="flex flex-col  pt-12">
        <div className="w-full md:w-[280px] ">
          <LargeButton
            type={ButtonType.LargePrimary}
            btnText="Shop"
            handleClick={() => {
              router.push("/");
            }}
          ></LargeButton>
        </div>
        <div className="pt-3 px-4"></div>
        <div className="w-full md:w-[280px] ">
          <LargeButton
            type={ButtonType.LargeSecondary}
            btnText="Sign Out"
            handleClick={signOut}
          ></LargeButton>
        </div>
      </div>
    </div>
  );
}
