export default function CopyrightLine() {
  return (
    <div className="pt-0 font-righteous">
      Lucha Luchita
      <div className="font-roboto">
        is a jewelry project for boundary-defying bodies
      </div>
      <div className="font-roboto">
        made with love by{"  "}
        <a
          target="_blank"
          className="font-medium hover:after:content-['➚'] hover:before:content-['➚'] hover:text-brandPurple  hover:bg-brandLime underline md:no-underline"
          href={"https://www.github.com/tinashan22"}
        >
          Tina Shan
        </a>
      </div>
    </div>
  );
}
