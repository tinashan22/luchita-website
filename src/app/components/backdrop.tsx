import { useEffect, PropsWithChildren, MouseEventHandler } from "react";
import { stateLogger } from "../../stateLogger";
import { easeIn, motion } from "framer-motion";
type BackdropProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
};

export default function Backdrop(props: PropsWithChildren<BackdropProps>) {
  // Log state
  useEffect(() => {
    stateLogger("Backdrop", true);
    return () => stateLogger("Backdrop", false);
  }, []);

  return (
    //     className="fixed top-0 left-0 w-screen h-screen z-10  bg-opacity-50 bg-gray-500 bg-blur-sm"

    <motion.div
      className="fixed top-0
       left-0 w-full h-screen flex items-center justify-center  bg-slate-700 bg-opacity-50 bg-blur-sm z-10 "
      onClick={props.onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: easeIn }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
}
