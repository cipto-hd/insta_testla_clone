import { ChevronDownIcon, XIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { slideInRight } from "react-animations";

import { StyleSheet, css } from "aphrodite";
const styles = StyleSheet.create({
  slideInRight: {
    animationName: slideInRight,
    animationDuration: "1s",
  },
});
export const Tesla = () => {
  const [bottomReached, setBottomReached] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const scrollRef = useRef(null);

  const onScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

      if (scrollTop + clientHeight === scrollHeight) {
        setBottomReached(true);
      } else if (bottomReached && scrollTop + clientHeight < scrollHeight) {
        setBottomReached(false);
      }
    }
  };

  const openDrawer = () => {
    console.log("openDrawer");
  };

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 flex items-center justify-between h-20 pl-10 pr-6 -mb-20">
        <svg
          className="w-32 cursor-pointer"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
            fill="currentColor"
          ></path>
        </svg>

        <ul className="hidden lg:inline-flex">
          <li className="tesla_menu_item">Model S</li>
          <li className="tesla_menu_item">Model 3</li>
          <li className="tesla_menu_item">Model X</li>
          <li className="tesla_menu_item">Model Y</li>
          <li className="tesla_menu_item">Solar Roof</li>
          <li className="tesla_menu_item">Solar Panels</li>
        </ul>

        <ul className="hidden lg:inline-flex">
          <li className="tesla_menu_item">Shop</li>
          <li className="tesla_menu_item">Account</li>
          <li className="tesla_menu_item">Menu</li>
        </ul>

        <nav
          onMouseLeave={() => setIsOpen(false)}
          className="fixed right-0 z-50 justify-between px-6 text-gray-700 border border-b border-gray-200 rounded-md shadow-md bg-gray-50 w-52 lg:hidden top-4"
        >
          <div
            className="w-10 h-10 p-2 ml-3 font-bold rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </div>
          {isOpen && (
            <ul className={css(styles.slideInRight) + " flex flex-col pb-2"}>
              <li className="tesla_menu_item">Shop</li>
              <li className="tesla_menu_item">Account</li>
              <li className="tesla_menu_item">Menu</li>
              <li className="h-3 border-t"></li>

              <li className="tesla_menu_item">Model S</li>
              <li className="tesla_menu_item">Model 3</li>
              <li className="tesla_menu_item">Model X</li>
              <li className="tesla_menu_item">Model Y</li>
              <li className="tesla_menu_item">Solar Roof</li>
              <li className="tesla_menu_item">Solar Panels</li>
            </ul>
          )}
        </nav>
      </header>

      <main
        onScroll={onScroll}
        ref={scrollRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        {/* Model 3 */}
        <div className="bg-[url('/tesla/M3-Homepage-Desktop-LHD.jpeg')] h-screen bg-center bg-cover snap-start">
          <div className="relative flex flex-col items-center h-full">
            <div className="absolute flex flex-col items-center flex-1 top-20">
              <h1 className="text-4xl font-bold text-gray-900">Model 3</h1>
              <p className="text-base font-normal text-gray-700">
                Order Online for{" "}
                <a
                  href="#"
                  className="underline underline-offset-[3px] hover:decoration-2 cursor-pointer"
                >
                  touchless Delivery
                </a>
              </p>
            </div>

            <div className="absolute flex flex-col gap-5 bottom-20 md:flex-row">
              <a href="#" className="btn-hero btn-hero-active">
                Custom Order
              </a>
              <a href="#" className="btn-hero btn-hero-normal">
                Existing Inventory
              </a>
            </div>

            <a href="#next" className="absolute w-7 animate-bounce bottom-2">
              <ChevronDownIcon />
            </a>
          </div>
        </div>

        {/* Model Y */}
        <div className="bg-[url('/tesla/Desktop-ModelY.jpeg')] h-screen bg-center bg-cover snap-start">
          <div className="relative flex flex-col items-center h-full">
            <div className="absolute flex flex-col items-center flex-1 top-20">
              <h1 className="text-4xl font-bold text-gray-900" id="next">
                Model Y
              </h1>
              <p className="text-base font-normal text-gray-700">
                Order Online for{" "}
                <a
                  href="#"
                  className="underline underline-offset-[3px] hover:decoration-2 cursor-pointer"
                >
                  touchless Delivery
                </a>
              </p>
            </div>

            <div className="absolute flex flex-col gap-5 bottom-20 md:flex-row">
              <a href="#" className="btn-hero btn-hero-active">
                Custom Order
              </a>
              <a href="#" className="btn-hero btn-hero-normal">
                Existing Inventory
              </a>
            </div>
          </div>
        </div>

        {/* Model S */}
        <div className="bg-[url('/tesla/Homepage-Model-S-Desktop-LHD.jpeg')] h-screen bg-center bg-cover snap-start">
          <div className="relative flex flex-col items-center h-full">
            <div className="absolute flex flex-col items-center flex-1 top-20">
              <h1 className="text-4xl font-bold text-gray-900">Model S</h1>
              <p className="text-base font-normal text-gray-700">
                Order Online for{" "}
                <a
                  href="#"
                  className="underline underline-offset-[3px] hover:decoration-2 cursor-pointer"
                >
                  touchless Delivery
                </a>
              </p>
            </div>

            <div className="absolute flex flex-col gap-5 bottom-16 md:flex-row">
              <a href="#" className="btn-hero btn-hero-active">
                Custom Order
              </a>
              <a href="#" className="btn-hero btn-hero-normal">
                Existing Inventory
              </a>
            </div>
          </div>
        </div>

        {/* Model X */}
        <div className="bg-[url('/tesla/Homepage-Model-S-Desktop-LHD.jpeg')] h-screen bg-center bg-cover snap-start">
          <div className="relative flex flex-col items-center h-full">
            <div className="absolute flex flex-col items-center flex-1 top-20">
              <h1 className="text-4xl font-bold text-gray-900">Model X</h1>
              <p className="text-base font-normal text-gray-700">
                Order Online for{" "}
                <a
                  href="#"
                  className="underline underline-offset-[3px] hover:decoration-2 cursor-pointer"
                >
                  touchless Delivery
                </a>
              </p>
            </div>

            <div className="absolute flex flex-col gap-5 bottom-20 md:flex-row">
              <a href="#" className="btn-hero btn-hero-active">
                Custom Order
              </a>
              <a href="#" className="btn-hero btn-hero-normal">
                Existing Inventory
              </a>
            </div>
          </div>
        </div>

        {/* Solar Panels */}
        <div className="bg-[url('/tesla/_25-HP-SolarPanels-D.jpeg')] h-screen bg-center bg-cover snap-start">
          <div className="relative flex flex-col items-center h-full">
            <div className="absolute flex flex-col items-center flex-1 top-20">
              <h1 className="text-4xl font-bold text-gray-900">Solar Panels</h1>
              <p className="text-base font-normal text-gray-700">
                Order Online for{" "}
                <a
                  href="#"
                  className="underline underline-offset-[3px] hover:decoration-2 cursor-pointer"
                >
                  touchless Delivery
                </a>
              </p>
            </div>

            <div className="absolute flex flex-col gap-5 bottom-20 md:flex-row">
              <a href="#" className="btn-hero btn-hero-active">
                Custom Order
              </a>
              <a href="#" className="btn-hero btn-hero-normal">
                Existing Inventory
              </a>
            </div>
          </div>
        </div>

        {/* Solar Roof */}
        <div className="bg-[url('/tesla/HP-SR-Design-D.jpeg')] h-screen bg-center bg-cover snap-start">
          <div className="relative flex flex-col items-center h-full">
            <div className="absolute flex flex-col items-center flex-1 top-20">
              <h1 className="text-4xl font-bold text-gray-900">Solar Roof</h1>
              <p className="text-base font-normal text-gray-700">
                Order Online for{" "}
                <a
                  href="#"
                  className="underline underline-offset-[3px] hover:decoration-2 cursor-pointer"
                >
                  touchless Delivery
                </a>
              </p>
            </div>

            <div className="absolute flex flex-col gap-5 bottom-20 md:flex-row">
              <a href="#" className="btn-hero btn-hero-active">
                Custom Order
              </a>
              <a href="#" className="btn-hero btn-hero-normal">
                Existing Inventory
              </a>
            </div>
          </div>
        </div>

        {/* Accessories */}
        <div className="bg-[url('/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046.jpeg')] h-screen bg-center bg-cover snap-start">
          <div className="relative flex flex-col items-center h-full pt-16 pb-20">
            <div className="absolute flex flex-col items-center flex-1 top-16">
              <h1 className="text-4xl font-bold text-gray-900">Accessories</h1>
              <p className="text-base font-normal text-gray-700">
                Order Online for{" "}
                <a
                  href="#"
                  className="underline underline-offset-[3px] hover:decoration-2 cursor-pointer"
                >
                  touchless Delivery
                </a>
              </p>
            </div>

            <div className="absolute flex flex-col gap-5 bottom-44 md:bottom-24 md:flex-row">
              <a href="#" className="btn-hero btn-hero-active">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer
        aria-label="Site footer"
        className={
          (bottomReached ? "" : "hidden ") +
          "absolute border-t pt-2 w-full bottom-2"
        }
      >
        <nav className="text-xs font-semibold text-gray-600">
          <ul className="flex flex-col items-center justify-center gap-3 md:flex-row">
            <li className="inline-flex">
              <a
                href="/about"
                title="Copyright 2022 Tesla Motors"
                className="link"
              >
                Tesla &copy; {new Date().getFullYear()}
              </a>
            </li>
            <li className="inline-flex">
              <a href="/legal" className="link">
                Privacy &amp; Legal
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="https://www.tesla.com/vin-recall-search"
                className="link"
              >
                Vehicle Recalls
              </a>
            </li>
            <li className="hidden md:inline-flex">
              <a href="/contact" className="link">
                Contact
              </a>
            </li>
            <li className="inline-flex">
              <a href="/careers" className="link">
                Careers
              </a>
            </li>
            <li className="inline-flex">
              <a href="/blog" className="link">
                News
              </a>
            </li>
            <li className="hidden md:inline-flex">
              <a href="https://engage.tesla.com/" className="link">
                Engage
              </a>
            </li>
            <li className="hidden md:inline-flex">
              <a href="/findus/list" className="link">
                Locations
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};
