function Testemonials() {
  const data = [
    {
      desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      pic: "src/assets/images/profile-1.jpg",
      name: "Satish Patel",
      posistion: "Founder & CEO, Huddle",
    },
    {
      desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      pic: "src/assets/images/profile-2.jpg",
      name: "Bruce McKenzie",
      posistion: "Founder & CEO, Huddle",
    },
    {
      desc: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      pic: "src/assets/images/profile-3.jpg",
      name: "Iva Boyd",
      posistion: "Founder & CEO, Huddle",
    },
  ];
  return (
    <section className="bg-bghome py-[200px]" id="team">
      <div className="container mx-auto relative">
        <div className="absolute">
          <img src="src/assets/images/bg-quotes.png" alt="quotes" />
        </div>
        <div className="max-w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white py-[40px] gap-10 ">
          {data.map((person) => {
            return (
              <div
                key={person.name}
                className="bg-bgcards max-w-full p-[40px] rounded-md shadow-[8px_8px_1px_8px_#1c202c] mx-[30px] md:mx-0"
              >
                <p className="font-normal opacity-80">{person.desc}</p>
                <div className="flex  justify-start items-center max-w-full gap-[15px] pt-[15px] flex-wrap ">
                  <img
                    src={person.pic}
                    alt="person-img"
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div>
                    <h6 className="font-[700] pb-[5px]">{person.name}</h6>
                    <p>{person.posistion}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testemonials;
