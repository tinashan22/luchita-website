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
      const logInApiRes = await signIn(email, password);

      if (logInApiRes === "success") {
        resetFormFields();
        router.push("/profile");
        //go to log in page with email account
      } else {
        switch (logInApiRes) {
          case "auth/wrong-password":
            console.log("wrong password", logInApiRes);
            // alert("Wrong password. Please try again");
            setSignInMsg("Wrong password. Please try again.");

            break;

          case "auth/user-not-found":
            console.log("no email", logInApiRes);
            setSignInMsg(
              "No account found with this email. Did you forget to sign up?"
            );

            break;

          case "auth/too-many-request":
            console.log("too many request", logInApiRes);
            setSignInMsg("Too many attempts. Please try again later.");

            break;

          case "auth/network-request-failed":
            console.log("network error", logInApiRes);
            setSignInMsg("Too many attempts. Please try again later.");

            break;

          default:
            console.log("default", logInApiRes);
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
    <div className="grid place-items-center ">
      <div className="max-w-[420px] flex-col justify-center items-center">
        <h1 className="font-roboto text-2xl font-medium pb-3 ">
          {" "}
          Log in to see your favorite designs
        </h1>
        <form action="Log in with email and password" onSubmit={handleSubmit}>
          <label className="text-xs font-roboto opacity-80" title="email">
            {" "}
            Email{" "}
          </label>
          <input
            className="font-garamond p-2 mt-1 mb-4 w-full "
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
            className="font-garamond p-2 mt-1 mb-2 w-full"
            onChange={handleChange}
            value={formFields.password}
            type="password"
            name="password"
            placeholder="Enter your password"
            required={true}
          />

          {signInMsg.length > 1 && (
            <p className="mt-0 font-roboto text-xs  text-red-500 uppercase">
              {" "}
              {signInMsg}
            </p>
          )}
          <input
            value="Log in"
            className=" w-full bg-brandPurple border-brandLime
        flex items-center justify-center rounded-[20px] h-[48px] border  text-brandLime font-righteous text-lg py-3 mt-10"
            type="submit"
          />
        </form>
      </div>
      <div className="flex justify-center font-garamond pt-2 pl-1 text-base text-brandPurple opacity-90">
        <Link href="/createAccount"> ☞ New kid? Click here to sign up</Link>
      </div>
    </div>
  );
}
