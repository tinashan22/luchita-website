"use client";

import { signIn } from "@/firebase/firebase_auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function LoginPage({
  prefilledEmail,
}: {
  prefilledEmail?: string;
}) {
  const defaultFormFields = {
    email: prefilledEmail ?? "",
    password: "",
  };
  const router = useRouter();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  //rewrite
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      resetFormFields();
      // Send the email and password to firebase
      const userCredential = await signIn(email, password);

      if (userCredential != null) {
        resetFormFields();
        router.push("/profile");
        //go to log in page with email account
      } else {
        alert("No account found with this email. Did you forget to sign up?");
        // createNewUser(username, email, password);
        // resetFormFields();
      }
    } catch (error: any) {
      console.log("User Sign In Failed", error.message);
    }
  };

  const resetFormFields = () => {
    return setFormFields({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h1 className="font-roboto text-2xl font-medium pb-3 ">
        {" "}
        Log in to see your favorite designs
      </h1>

      <form action="Log in with email and password" onSubmit={handleSubmit}>
        <label className="text-xs" title="email">
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
        <label className="text-xs" title="password">
          {" "}
          Password
        </label>
        <input
          className="font-garamond p-2 mb-4 w-full "
          onChange={handleChange}
          value={formFields.password}
          type="password"
          name="password"
          placeholder="Enter your password"
          required={true}
        />

        <input
          value="Log in"
          className=" w-full bg-brandPurple border-brandLime
        flex items-center justify-center rounded-[20px] h-[48px] border  text-brandLime font-righteous text-lg py-3 mt-4"
          type="submit"
        />
      </form>
      <div className="flex justify-center font-garamond pt-2 pl-1 text-base text-brandPurple opacity-90">
        <Link href="/account"> ☞ New kid? Click here to sign up</Link>
      </div>
    </div>
  );
}
