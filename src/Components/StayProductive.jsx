function StayProductive() {
  return (
    <section className="bg-bghome pt-[200px]">
      <div className="container mx-auto">
        <div className="text-white flex gap-5  items-center justify-evenly flex-wrap md:flex-nowrap ">
          <div>
            <img
              src="src/assets/images/illustration-stay-productive.png"
              alt="productive-img"
            />
          </div>
          <div>
            <h4 className="px-[30px] md:px-0 text-[30px] md:text-[40px] font-[700] pb-[15px]">
              Stay productive, <br /> wherever you are
            </h4>
            <div className="pb-[15px] max-w-full px-[30px] md:px-0">
              <p className="pb-[15px]">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>

            <a
              href="/"
              className="mx-[30px] md:mx-[0] text-accentblue flex items-center gap-[15px] w-fit hover:text-accentcyan transition-colors pb-[5px] duration-300 border-b-2 border-accentblue border-solid"
            >
              See how Fylo works
              <img
                src="src/assets/images/icon-arrow.svg"
                alt="arrow"
                className="h-[20px] w-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite] "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;
