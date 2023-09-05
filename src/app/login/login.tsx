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

  const [signInMsg, setSignInMsg] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //rewrite
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Send the email and password to firebase
      const userCredentialMsg = await signIn(email, password);

      if (userCredentialMsg === "success") {
        resetFormFields();
        router.push("/profile");
        //go to log in page with email account
      } else {
        switch (userCredentialMsg) {
          case "auth/wrong-password":
            console.log("wrong password", userCredentialMsg);
            // alert("Wrong password. Please try again");
            setSignInMsg("Wrong password. Please try again");

            break;

          case "auth/user-not-found":
            console.log("no email", userCredentialMsg);
            setSignInMsg(
              "No account found with this email. Did you forget to sign up?"
            );

            break;

          case "auth/too-many-request":
            console.log("too many request", userCredentialMsg);
            setSignInMsg("Too many attempts. Please try again later.");

            break;

          default:
            console.log("default", userCredentialMsg);
            setSignInMsg("There was an error. Please try again.");

            break;
        }
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
        <div className="flex flex-col justify-start">
          <label className="text-xs font-roboto opacity-80" title="email">
            {" "}
            Email{" "}
          </label>
          <input
            className="font-garamond p-2 mt-1 mb-4 w-full md:w-1/3 lg:w-1/3"
            onChange={handleChange}
            value={formFields.email}
            type="email"
            name="email"
            placeholder="Enter your email"
            required={true}
          />
        </div>
        <div className="flex flex-col justify-start">
          <label className="text-xs font-roboto opacity-80" title="password">
            {" "}
            Password
          </label>
          <input
            className="font-garamond p-2 mt-1 mb-2 w-full md:w-1/3 lg:w-1/3"
            onChange={handleChange}
            value={formFields.password}
            type="password"
            name="password"
            placeholder="Enter your password"
            required={true}
          />
        </div>
        {signInMsg.length > 1 && (
          <p className="mt-0 font-roboto text-xs  text-red-500 uppercase">
            {" "}
            {signInMsg}
          </p>
        )}
        <input
          value="Log in"
          className=" w-full md:w-1/3 lg:w-1/3 bg-brandPurple border-brandLime
        flex items-center justify-center rounded-[20px] h-[48px] border  text-brandLime font-righteous text-lg py-3 mt-10"
          type="submit"
        />
      </form>
      <div className="flex justify-center font-garamond pt-2 pl-1 text-base text-brandPurple opacity-90">
        <Link href="/account"> ☞ New kid? Click here to sign up</Link>
      </div>
    </div>
  );
}
