"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useContext, useEffect, useState } from "react";
import SmallButton from "./buttonSmall";
import userIcon from "../../public/icons/user.svg";
import Image from "next/image";
import { AuthContext, AuthProvider } from "@/context/authContext";
import { auth } from "@/firebase/firebase";

const navAnimationVariants = {
  hidden: {
    opacity: 0.2,
    x: "100px",
  },
  visible: {
    opacity: 1,
    x: "0px",
    transition: {
      duration: 0.2,
      // ease: "easeIn",
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,

    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const isMobile = window.innerWidth < 480;
const logoNavAnimationVariants = isMobile
  ? {
      hidden: {
        x: "-30vw",
        opacity: 0.2,
      },
      visible: {
        x: "0px",
        opacity: 1,
        transition: {
          duration: 0.2,
          type: "spring",
          damping: 15,
          stiffness: 100,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      },
    }
  : {
      hidden: {
        x: "-50vw",
        opacity: 0.2,
      },
      visible: {
        x: "0px",
        opacity: 1,
        transition: {
          duration: 0.2,
          type: "spring",
          damping: 15,
          stiffness: 100,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      },
    };

export default function MobileNav() {
  //log in status
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const { authUser, currentUserRecord } = useContext(AuthContext);

  useEffect(() => {
    setUserLoggedIn(authUser != null);
    console.log("nav use effect update", authUser);
    return setUserLoggedIn(authUser != null);
  }, [authUser]);

  //nav animation
  const { scrollY } = useScroll();
  const [isTopOfPage, setTopOfPage] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setTopOfPage(false);
    } else {
      setTopOfPage(true);
    }
  });
  return (
    <motion.div>
      <div className="bg-brandLime h-14 min-w-full top-0 fixed flex items-center justify-center border-b border-brandPurple z-10 selection:bg-brandCream">
        {isTopOfPage && (
          <motion.div
            variants={logoNavAnimationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link href="/">
              <p className={`font-righteous text-xl text-brandPurple`}>
                Lucha Luchita
              </p>
            </Link>
          </motion.div>
        )}
        {/* beginning of login button */}
        {!isTopOfPage && (
          <motion.div
            variants={navAnimationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex items-center justify-between w-full px-5"
          >
            <Link href="/">
              <p className={`font-righteous text-xl text-brandPurple`}>
                Lucha Luchita
              </p>
            </Link>

            {/* <Link href={authUser != null ? "/profile" : "/createAccount"}>
              <div>
                <Image
                  className="h-[24px]"
                  src={userIcon}
                  alt="icon for user account page"
                />
                {authUser?.toString() || "IS NULL"}
              </div>
            </Link> */}
            {authUser != null ? (
              <div>
                <Link href="/profile">
                  <Image
                    className="h-[24px]"
                    src={userIcon}
                    alt="icon for user account page"
                  />
                </Link>
              </div>
            ) : (
              <Link href="/login">
                <SmallButton btnText="log in" />
              </Link>
            )}
          </motion.div>
        )}

        {/* end of login */}
      </div>
    </motion.div>
  );
}
