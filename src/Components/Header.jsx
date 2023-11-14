import { useEffect } from "react";
import { useRef } from "react";

function Header() {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 100) {
        headerRef.current.style.background = "hsl(216, 53%, 9%)";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, []);
  const links = ["Features", "Team ", "Sign-In"];
  return (
    <header
      ref={headerRef}
      className="pt-[40px] fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div className="px-[30px] container mx-auto flex justify-between items-center gap-[20px]">
        <a href="/">
          <img
            src="./images/logo.svg"
            alt="logo-img"
            className="w-[80px] sm:w-full block"
          />
        </a>
        <nav>
          <ul className="text-white flex gap-5 md:gap-12 items-center">
            {links.map((link) => {
              return (
                <li
                  className="hover:underline min-w-[50px] opacity-80 hover:opacity-100 transition-opacity duration-300"
                  key={link}
                >
                  <a
                    className="inline-block text-[12px] md:text-lg"
                    href={`#${link.toLocaleLowerCase()}`}
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
