import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavItems = [
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 2,
    name: "Careers",
    link: "/about#career",
  },
  {
    id: 3,
    name: "Services",
    link: "/#services",
  },
  {
    id: 4,
    name: "Projects",
    link: "/project",
  },
  {
    id: 5,
    name: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto py-16 sm:px-6 md:px-8 lg:px-6">
        <Link href="/">
          <div className="flex justify-center gap-x-4 text-[#ff8638] text-[2rem] font-bold hover:cursor-pointer">
            <Image src={"/assets/images/logo.png"} height={40} width={45} />
            WATT
          </div>
        </Link>

        <p className="mx-auto mt-6 text-center text-gray-200">
          Our startup specializes in creating automation robots that simplify
          everyday tasks and make life easier.
        </p>

        <nav className="mt-12">
          <div className="flex flex-wrap justify-center sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
            {NavItems.map((option) => (
              <div
                key={option.id}
                id={option.id}
                className="text-gray-400 transition hover:text-white"
              >
                <Link href={option.link}>{option.name}</Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
