import React from "react";


const HeroSection = () => {
  return (
    <>
      <section className="w-screen h-screen text-center bg-black text-white relative overflow-hidden">
        <div className="relative z-30 h-full flex flex-col">
          <header>
            <h1 className="text-[40px] pt-20 font-medium">Experience Tesla</h1>
            <h3 className="text-[15px] font-medium">
              Schedule a demo drive today
            </h3>
          </header>
          <footer className=" flex flex-col flex-grow justify-end pb-24">
            <div>
              <a
                href=""
                className="border-[3px] border-white p-2 rounded px-[6%] backdrop-blur-[50px] font-medium text-sm hover:bg-white hover:text-black transition-colors"
              >
                Demo Drive
              </a>
            </div>
          </footer>
        </div>

        <div className="absolute top-0 bottom-0 h-[100%] w-[100%] z-10">
          <video
            className="object-center object-cover h-full w-full"
            autoPlay
            muted
            loop
            src="/video.webm"
          ></video>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
