import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const navContent = ["Home", "Benefits", "Our Classes", "Contact Us"];

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />
            {/* RIGHT SIDE */}
            <div className={`${flexBetween} w-full`}>
              {/* INNER LEFT SIDE */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                {navContent.map((element, i) => (
                  <Link
                    page={`${element}`}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    key={`${element}-${i}`}
                  />
                ))}
              </div>
              {/* INNER RIGHT SIDE */}
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button>Becom a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
