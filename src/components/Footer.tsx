import { useEffect } from "react";
import {
  FaAngleDoubleUp,
  FaChevronDown,
  FaDev,
  FaMedium,
  FaStackOverflow,
  FaYoutube,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Footer = () => {
  const { bottomReached, nextHash } = useSelector(
    (state: RootState) => state.app
  );

  let chevron_down: HTMLElement | null;

  useEffect(() => {
    chevron_down = document.getElementById("chevron_down");
    chevron_down?.setAttribute("href", "#" + nextHash);
  }, [nextHash]);

  const scrollToTop = () => {
    window.location.href = "#home";
  };

  return (
    <footer className="w-full">
      <div className="container relative flex flex-row">
        {bottomReached ? (
          <div className="absolute z-20 flex flex-col items-center justify-center w-full gap-2 pt-2 -ml-4 text-sm border-t-2 border-gray-500 bottom-2 bg-gray-50 dark:bg-gray-800 dark:text-gray-50">
            <p>Copyright &copy; {new Date().getFullYear()}</p>
            <p className="flex flex-row items-center justify-center gap-2">
              <a
                href="https://stackoverflow.com/ciptohadi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaStackOverflow className="social-link" />
              </a>
              <a
                href="https://www.youtube.com/c/CiptoHadi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="social-link" />
              </a>
              <a
                href="https://medium.com/cipto.hd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMedium className="social-link" />
              </a>
              <a
                href="https://dev.to/cipto.hd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDev className="social-link" />
              </a>
            </p>
            <p>designed and developed by Cipto</p>
          </div>
        ) : (
          <div className="absolute z-20 flex items-center justify-center w-full -ml-4 bottom-1">
            <a href="#contact" id="chevron_down">
              <FaChevronDown className="w-10 h-10 animate-bounce fill-gray-800 dark:fill-gray-50" />
            </a>
          </div>
        )}
        <div className="absolute z-50 right-3 bottom-3">
          {nextHash !== "about" && (
            <FaAngleDoubleUp
              onClick={scrollToTop}
              className="w-10 h-10 p-1 bg-gray-800 rounded-full cursor-pointer animate-pulse animate-bounce fill-gray-50 dark:fill-gray-800 dark:bg-gray-50"
            />
          )}
        </div>
      </div>
    </footer>
  );
};
