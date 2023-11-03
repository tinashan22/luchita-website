"use client";

import LargeButton from "@/components/buttonLarge";
import { ButtonType } from "@/constants";
import { createNewUser, signIn } from "@/firebase/firebase_auth";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function AccountPage() {
  const router = useRouter();
  const defaultFormFields = {
    username: "",
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password } = formFields;
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // resetFormFields();

      const registerApiRes = await createNewUser(username, email, password);

      // if (userCredential != null) {
      if (registerApiRes === "success") {
        resetFormFields();
        router.push("/profile");
      } else {
        switch (registerApiRes) {
          case "auth/email-already-in-use":
            setErrorMsg("Email already in use. Please go to log in page.");
            break;
          case "auth/weak-password":
            setErrorMsg("Your password should be at least 6 characters");
            break;

          default:
            console.log("default", registerApiRes);
            setErrorMsg("There was an error. Please try again.");

            break;
        }
      }
    } catch (error: any) {
      console.log("User Sign In Failed", error.message);
    }
  };

  const resetFormFields = () => {
    return setFormFields(defaultFormFields);
  };
  return (
    <div className=" grid place-items-center">
      <div className="max-w-[420px] flex-col justify-center items-center">
        <h1 className="font-roboto text-2xl pb-3 font-medium">
          {" "}
          Create an account to save your favorite designs
        </h1>
        <form action="Sign up with email and password" onSubmit={handleSubmit}>
          <label className="text-xs font-roboto opacity-80" title="username">
            {" "}
            Name{" "}
          </label>
          <input
            className="font-garamond p-2  mb-4 w-full"
            onChange={handleChange}
            value={formFields.username}
            type="string"
            name="username"
            placeholder="e.g.'Apple Smith'"
            required={true}
          />
          <label className="text-xs font-roboto opacity-80" title="email">
            {" "}
            Email{" "}
          </label>
          <input
            className="font-garamond p-2 mb-4 w-full"
            onChange={handleChange}
            value={formFields.email}
            type="email"
            name="email"
            placeholder="Enter your email"
            required={true}
          />
          <label className="text-xs font-roboto opacity-80" title="password">
            {" "}
            Password
          </label>
          <input
            className="font-garamond p-2 mb-2 w-full "
            onChange={handleChange}
            value={formFields.password}
            type="password"
            name="password"
            placeholder="Use at least 6 characters"
            required={true}
          />
          {errorMsg.length > 1 && (
            <p className="mt-0 font-roboto text-xs  text-red-500 uppercase">
              {" "}
              {errorMsg}
            </p>
          )}

          <input
            value="Create account"
            className=" w-full bg-brandPurple border-brandLime
            flex items-center justify-center rounded-[20px] h-[48px] border  text-brandLime font-righteous text-lg py-3 mt-10"
            type="submit"
          />
        </form>
        <div className="flex justify-center font-garamond pt-2 pl-1 text-base text-brandPurple opacity-90 ">
          <Link href="/login">
            {" "}
            ☞ Log in here if you already have an account
          </Link>
        </div>
      </div>
    </div>
  );
}
