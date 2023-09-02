"use client";

import LargeButton from "@/components/buttonLarge";
import { ButtonType } from "@/constants";
import { createNewUser, signIn } from "@/firebase/firebase_auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function AccountPage() {
  const router = useRouter();
  const defaultFormFields = {
    username: "",
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      resetFormFields();
      // Send the email and password to firebase
      const userCredential = await signIn(email, password);

      if (userCredential != null) {
        resetFormFields();
        alert("This email has already been used with an account");
        //go to log in page with email account
      } else {
        createNewUser(username, email, password);
        resetFormFields();

        router.push("/profile");
      }
    } catch (error: any) {
      console.log("User Sign In Failed", error.message);
    }
  };
  const resetFormFields = () => {
    return setFormFields(defaultFormFields);
  };
  return (
    <div>
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
          className="font-garamond p-2 mb-4 w-full "
          onChange={handleChange}
          value={formFields.password}
          type="password"
          name="password"
          placeholder="Create a secure password"
          required={true}
        />

        <input
          value="Create account"
          className=" w-full bg-brandPurple border-brandLime
            flex items-center justify-center rounded-[20px] h-[48px] border  text-brandLime font-righteous text-lg py-3 mt-8"
          type="submit"
        />
      </form>
      <div className="flex justify-center font-garamond pt-2 pl-1 text-base text-brandPurple opacity-90">
        <Link href="/login"> ☞ Log in here if you already have an account</Link>
      </div>
    </div>
  );
}
