import { ButtonType } from "@/constants";

interface ButtonProps {
  type: ButtonType;
  btnText: string;
  disabled?: boolean | undefined;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  //handleClick2?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function LargeButton({
  type,
  btnText,
  disabled,

  handleClick,
}: ButtonProps) {
  //   function renderButton() {
  //     switch (type) {
  //       case ButtonType.LargePrimary:
  //         return (
  //           <div
  //             onClick={handleClick}
  //             className={`flex items-center justify-center rounded-[20px] bg-brandPurple border border-brandLime`}
  //           >
  //             <p className={`font-righteous text-brandCream py-2`}>{btnText}</p>
  //           </div>
  //         );

  //       case ButtonType.LargeSecondary:
  //         return (
  //           <div
  //             onClick={handleClick}
  //             className={`flex items-center justify-center rounded-[20px] bg-brandPink border border-brandPurple`}
  //           >
  //             <p className={`font-righteous text-brandPurple py-2`}>{btnText}</p>
  //           </div>
  //         );

  //       default:
  //         return (
  //           <div
  //             onClick={handleClick}
  //             className={`flex items-center justify-center rounded-[20px] bg-brandPurple border border-brandLime`}
  //           >
  //             <p className={`font-righteous text-brandCream py-2`}>{btnText}</p>
  //           </div>
  //         );
  //     }
  //   }

  return (
    <>
      {/* {renderButton()} */}
      <div
        className={`${
          type === ButtonType.LargePrimary && "bg-brandPurple border-brandLime"
        }
        ${
          type === ButtonType.LargeSecondary &&
          "bg-brandPink border-brandPurple"
        }

        
            flex items-center justify-center rounded-[20px] h-[48px] border`}
      >
        <button
          onClick={handleClick}
          disabled={disabled}
          className={`w-full ${disabled && "opacity-20"}  `}
        >
          <p
            className={`
        
        ${type === ButtonType.LargePrimary && "text-brandLime"}
          ${type === ButtonType.LargeSecondary && "text-brandPurple"}
         font-righteous text-lg py-3 `}
          >
            {btnText}
          </p>
        </button>
      </div>
    </>
  );
}
