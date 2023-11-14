function Features() {
  const cards = [
    {
      id: 1,
      icon: "./images/icon-access-anywhere.svg",
      title: "Access your files, anywhere",
      desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      id: 2,
      icon: "./images/icon-security.svg",
      title: "Security you can trust",
      desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      id: 3,
      icon: "./images/icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      id: 4,
      icon: "./images/icon-any-file.svg",
      title: "Store any type of file",
      desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];
  return (
    <section className="bg-bghome py-[200px]" id="features">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
          {cards.map((card) => {
            return (
              <div key={card.id}>
                <div className="flex justify-between items-center text-white flex-col pb-[50px]">
                  <div className="pb-[15px]">
                    <img src={card.icon} alt="card-img" />
                  </div>
                  <h4 className="pb-[15px] font-[700] text-[20px] md:text-[30px]">
                    {card.title}
                  </h4>
                  <p className="text-center max-w-full w-[400px] px-5">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
