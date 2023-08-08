import React from "react";

const Section = ({ img, title, subtitle, btn1, btn2 }) => {
  return (
    <section
      className="w-screen h-screen text-center bg-black relative overflow-hidden scroll"
      data-header-color="black"
    >
      <div className="relative z-30 h-full flex flex-col">
        <header>
          <h1 className="text-[40px] pt-20 font-semibold tracking-wide text-black">
            {title}
          </h1>
          <h3 className="text-[15px] font-medium">{subtitle}</h3>
        </header>
        <footer className=" flex flex-col flex-grow justify-end pb-20">
          <div className="flex flex-row gap-5 justify-center items-center">
            <a
              href=""
              className="py-[11px] rounded text-black px-[3%] w-[18%] bg-gray-200 font-medium text-sm hover:text-white hover:bg-black"
            >
              {btn1}
            </a>
            <a
              href=""
              className="py-[11px] rounded text-white px-[3%] w-[18%] bg-[#313236] font-medium text-sm hover:bg-black"
            >
              {btn2}
            </a>
          </div>
        </footer>
      </div>

      <div className="absolute top-0 bottom-0 h-[100%] w-[100%] z-10">
        <img className="object-center object-cover h-full w-full" src={img} />
      </div>
    </section>
  );
};

export default Section;
