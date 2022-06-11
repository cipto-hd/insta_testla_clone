import { SearchIcon, HomeIcon } from "@heroicons/react/solid";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { IGLogo, IGLogoTxt, ProfilePict } from "../../../assets/instagram";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm ">
      <div className="container flex items-center justify-between h-20 px-4 ">
        {/* Left */}
        <div className="cursor-pointer">
          <img className="w-10 lg:hidden" src={IGLogo} alt="IG Logo" />
          <img
            className="hidden w-24 lg:inline-block"
            src={IGLogoTxt}
            alt="IG Logo"
          />
        </div>

        {/* Middle */}
        <div className="relative flex items-center">
          <SearchIcon className="absolute w-5 h-5 text-gray-500 left-1" />
          <input
            placeholder="Search"
            type="text"
            className="h-8 px-1 text-sm font-light text-gray-500 duration-300 ease-in-out bg-gray-100 rounded-md outline-none pl-7 focus:ring-2 focus:ring-gray-400 focus:transition-all"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <HomeIcon className="hidden w-6 h-6 transition-transform duration-200 ease-out cursor-pointer hover:scale-125 md:inline-flex" />
          <PlusCircleIcon className="w-6 h-6 transition-transform duration-200 ease-out cursor-pointer hover:scale-125" />
          <img
            src={ProfilePict}
            alt="Profile Picture"
            className="w-10 transition-all duration-300 ease-in-out rounded-full cursor-pointer hover:ring-2 hover:ring-gray-500"
          />
        </div>
      </div>
    </header>
  );
};
