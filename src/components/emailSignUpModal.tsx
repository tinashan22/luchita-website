import LargeButton from "./buttonLarge";
import { ButtonType } from "@/constants";
import Image from "next/image";
import { stateLogger } from "@/stateLogger";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Backdrop from "./backdrop";
import { motion } from "framer-motion";
import { createEmailSubscriber } from "@/firebase/firestore";

type EmailSignUpModalProps = {
  handleCloseModal: (event: React.MouseEvent) => void;
};

const animationVariants = {
  hidden: {
    opacity: 0.2,
    scale: 0.7,
    y: "100px",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: "0px",
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0.2,
    scale: 0.2,
    y: "400px",
    x: "200px",
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

export default function EmailSignUpModal({
  handleCloseModal,
}: EmailSignUpModalProps) {
  const defaultFormFields = {
    displayName: "",
    email: "",
  };

  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const docRef = await createEmailSubscriber(
        formFields.displayName,
        formFields.email
      );
      if (docRef != null) {
        setFormFields(defaultFormFields);
        setHasSignedUp(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Backdrop onClick={handleCloseModal}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="m-auto"
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className=" bg-brandCream w-[356px] md:w-[522px] flex-col items-center justify-center h-[462px] relative rounded-[24px] border border-brandPurple">
          <div className="  w-[356px] md:mx-auto md:mt-4">
            {/* beginning of close button */}
            <div
              className="btn absolute right-3 top-3 z-20 text-lg "
              onClick={handleCloseModal}
            >
              <Image
                className="opacity-90"
                width={32}
                height={32}
                alt="close newsletter modal"
                src="/close.svg"
              />
            </div>
            {/* end of close button */}

            {hasSignedUp && (
              <div className="flex flex-col items-center justify-center w-full">
                <h1 className=" pt-28 text-[67px]">💖</h1>
                <h2 className="font-righteous font-medium text-xl pb-0  text-center w-full">
                  {" "}
                  Thank you for being part of Lucha Luchita!{" "}
                </h2>

                <div className="w-full pt-8 px-5">
                  <LargeButton
                    key="secondary"
                    type={ButtonType.LargeSecondary}
                    btnText="Done"
                    handleClick={handleCloseModal}
                  />
                </div>
              </div>
            )}

            {!hasSignedUp && (
              <div className="flex flex-col items-start pt-12 px-5">
                <h2 className="font-roboto font-medium text-2xl pb-0 ">
                  Be the first to know when the webshop launches!{" "}
                </h2>
                <p className="font-garamond text-lg pt-1  pb-2">
                  Get exclusive early access to new designs
                </p>
                <form
                  action="Sign up for email newsletters"
                  onSubmit={handleSubmit}
                >
                  <label
                    className="text-xs font-roboto opacity-80"
                    title="username"
                  >
                    {" "}
                    Name{" "}
                  </label>
                  <input
                    className="font-garamond p-2  mb-4 w-full"
                    onChange={handleChange}
                    value={formFields.displayName}
                    type="string"
                    name="displayName"
                    placeholder="e.g.'Apple Smith'"
                    required={true}
                  />
                  <label
                    className="text-xs font-roboto opacity-80"
                    title="email"
                  >
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

                  <input
                    value="Sign Up"
                    className=" w-full
            flex items-center justify-center rounded-[20px] h-[48px]  bg-brandPurple border-brandLime border  text-brandLime hover:bg-brandLime hover:border-brandPurple hover:text-brandPurple transition-colors font-righteous text-lg pt-2 pb-3 mt-8"
                    type="submit"
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}
