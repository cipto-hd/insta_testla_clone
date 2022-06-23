import { useState, useRef } from "react";
import { FaDev, FaMedium, FaStackOverflow, FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Footer = () => {
  const { bottomReached } = useSelector((state: RootState) => state.app);

  return (
    <footer
      className={
        (bottomReached ? "" : "hidden ") +
        "absolute flex flex-col items-center justify-center w-full gap-2 text-sm border-t-2 border-gray-500 z-20 pt-2 bottom-2  bg-gray-50 dark:bg-gray-800 dark:text-gray-50"
      }
    >
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
    </footer>
  );
};
