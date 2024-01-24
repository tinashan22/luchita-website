import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export type FormState = {
  message: string;
  errorMessage: string | undefined;
};

export const signInAction = async (
  prevState: FormState,
  formData: FormData
  //   email: string,
  //   password: string
): Promise<FormState> => {
  let res: string = "";
  let errorMessage = undefined;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (!email || !password)
    return { message: "error", errorMessage: "missing email or password" };
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      res = "success";
      //   return { message: "success" };
    })
    .catch((error) => {
      const errorCode = error.code as string;
      console.error("firebase_auth, signIn function", errorCode, error.message);
      res = "error";
      errorMessage = error.message;
    });
  return { message: res, errorMessage: errorMessage };

  //   if (res === "success") return { success: true, message: "login success" };
};
