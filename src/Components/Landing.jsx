function Landing() {
  return (
    <section className="pt-[200px]">
      <div className="container mx-auto">
        <div className="flex justify-center items-center max-w-full flex-col text-white  text-center">
          <div className="w-[750px] max-w-full">
            <img
              src="./images/illustration-intro.png"
              alt="intro-img"
              className="w-full h-fit"
            />
          </div>

          <h4 className="font-bold mx-auto text-[30px] md:text-[40px] leading-[60px] my-5 px-5">
            All your files in one secure location,
            <br />
            accessible anywhere.
          </h4>
          <p className="w-full md:w-[600px] font-normal px-5">
            Fylo stores all your most important files in one secure location.
            <br />
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="bg-accentblue py-2 w-[280px] h-[60px] px-8 my-5 rounded-[30px] hover:bg-accentcyan transition-colors duration-300 ">
            Get Started
          </button>
        </div>
      </div>
      <div className="m-w-full h-[100px]  md:mb-[200px]">
        <img
          src="./images/bg-curvy-desktop.svg"
          alt=""
          className="min-w-full h-fit"
        />
      </div>
    </section>
  );
}

export default Landing;
