import Image from "next/image";
import {
  BsBoundingBox,
  BsChevronDown,
  BsHouse,
  BsPeople,
} from "react-icons/bs";
export default function Sidebar() {
  return (
    <div className="hidden sidebar md:flex flex-col text-[#374151]">
      <div className="flex items-center">
        <div className="rounded-full mr-[3px]">
          <Image
            src="/profil1.png"
            alt="logo"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col ml-2">
          <span className="text-[18px]">Sven Pietsch</span>
          <span className="text-[14px]">Innoloft GmbH</span>
        </div>
      </div>
      <div className="mt-[10px]">
        <div className="flex items-center">
          <BsHouse size={16} />
          <span className="ml-[12px] font-light ">Home</span>
        </div>
        <div className="flex items-center">
          <BsPeople size={16} />
          <span className="ml-[12px] font-light">Members</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <BsBoundingBox size={16} />
            <span className="ml-[12px] font-light">Organizations</span>
          </div>
          <BsChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}
