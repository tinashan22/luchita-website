"use client";

//this is a duplicate login page to test next14 server actions and useFormState
//used with @/lib/actions.ts
import { signInAction } from "@/lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function LoginTestPage({
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
  const { pending } = useFormStatus();

  const [formState, formAction] = useFormState(signInAction, {
    message: "",
    errorMessage: undefined,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    if (formState?.message === "success") {
      resetFormFields();
      router.push("/profile");
    }
  }, [formState?.message, router]);

  const errorMessageConvertor = (errorCode: string) => {
    let displayMessage = "";

    if (errorCode.includes("auth/wrong-password")) {
      return (displayMessage = "Wrong password. Please try again.");
    }
    if (errorCode.includes("auth/user-not-found")) {
      return (displayMessage =
        "No account found with this email. Did you forget to sign up?");
    }
    if (errorCode.includes("auth/too-many-request")) {
      return (displayMessage = "Too many attempts. Please try again later.");
    }
    if (errorCode.includes("auth/network-request-failed")) {
      return (displayMessage = "Network error. Please try again.");
    }
    return (displayMessage = "There was an error. Please try again.");
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
          Log in to save your favorite designs
        </h1>
        <form action={formAction}>
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

          {formState?.message === "error" && (
            <p className="mt-0 font-roboto text-xs  text-red-500 uppercase">
              {" "}
              {errorMessageConvertor(formState?.errorMessage ?? "")}
            </p>
          )}
          <input
            value={pending ? "Logging in..." : "Log in"}
            className=" w-full bg-brandPurple border-brandLime
        flex items-center justify-center rounded-[20px] h-[48px] border  text-brandLime font-righteous text-lg py-3 mt-10"
            type="submit"
          />
        </form>
      </div>
      <div className="flex justify-center font-garamond pt-2 pl-1 text-base text-brandPurple md:opacity-70 hover:opacity-100">
        <Link href="/createAccount"> ☞ New kid? Click here to sign up</Link>
      </div>
    </div>
  );
}
