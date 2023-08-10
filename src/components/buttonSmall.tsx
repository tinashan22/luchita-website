interface ButtonProps {
  btnText: string;
  //   handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function SmallButton({
  btnText,
}: // handleClick

ButtonProps) {
  return (
    <div
      // onClick={handleClick}
      className="bg-brandPink rounded-[20px] h-[32px] border border-brandPurple  flex items-center justify-center "
    >
      <p className="font-righteous text-brandPurple text-sm py-2 px-[14px]">
        {btnText}
      </p>
    </div>
  );
}
