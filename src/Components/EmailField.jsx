function EmailField() {
  return (
    <section id="sign-in" className="pt-[250px] bg-bghome">
      <div className="relative">
        <div className="absolute left-[50%] translate-x-[-50%] top-[-150px] text-white flex justify-center items-center flex-col bg-bgemail max-w-full md:w-[800px] mx-auto rounded-[5px] shadow-lg px-[50px] py-[40px]">
          <h4 className="font-[700] text-[20px] md:text-[30px] pb-[25px]">
            Get early access today
          </h4>
          <p className="pb-[25px] opacity-80 font-normal max-w-full w-[620px] text-center">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className="flex justify-center items-center w-full flex-wrap gap-5">
            <input
              type="text"
              placeholder="example@fylo.com"
              className="w-full md:flex-1 pl-5  h-[60px] rounded-[30px] outline-none border-none text-black"
            />
            <button className="w-full md:w-[250px] bg-accentblue py-2  h-[60px] px-8 my-5 rounded-[30px] hover:bg-accentcyan transition-colors duration-300">
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmailField;
