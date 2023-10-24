import Image from "next/image";
import Link from "next/link";
import { BsSearch, BsChatDots, BsChevronDown, BsBell } from "react-icons/bs";

export default function NavBar() {
  return (
    <div className="w-screen h-[55px] bg-blue-900 flex items-center px-[20px] md:px-[240px] py-[10px] md:py-2">
      <div className="grid grid-cols-5 w-[100%]">
        <div className="col-span-1">
          <Link href="/">
            <Image
              src="/whiteLogo.svg"
              alt="logo"
              width={140}
              height={27}
              className="text-white"
            />
          </Link>
        </div>
        <div className="hidden col-span-4 md:flex justify-between">
          <div className="bg-white rounded-sm flex content-center px-1 py-[5px] h-[27px] w-[500px] focus:outline-sky-300">
            <input
              type="text"
              className="bg-none border-none w-full focus:outline-none px-2"
            />
            <BsSearch size={16} />
          </div>
          <div className="nav">
            <div className="nav-items flex flex-wrap items-center text-white">
              <BsChatDots size={16} className="mr-[20px]" />
              <div className="contents">
                <span className="mr-[3px]">EN</span>
                <BsChevronDown size={16} />
              </div>
              <BsBell className="ml-[20px] mr-[20px]" />
              <div className="contents ">
                <div className="rounded-full mr-[3px]">
                  <Image
                    src="/profil1.png"
                    alt="logo"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                </div>
                <BsChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
