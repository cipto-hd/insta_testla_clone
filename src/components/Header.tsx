import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState, toggleMode, toggleSideMenu } from "../store";

export const Header = () => {
  const dispatch = useDispatch();
  const { themeMode, isSideMenuOpen } = useSelector(
    (state: RootState) => state.app
  );

  return (
    <header className="sticky top-0 z-30 w-full -mb-20 text-gray-800 border-b shadow-md bg-gray-50 dark:bg-gray-800 dark:text-gray-50">
      <div className="container relative flex items-center justify-between w-full h-20 border-none shadow-none overflow-x-clip">
        {/* Left */}
        <div className="flex items-center justify-center w-24 h-20 text-2xl font-bold text-center transition-colors duration-300 ease-in-out bg-gray-200 border-gray-500 cursor-pointer dark:border-gray-300 border-x-2 dark:bg-gray-600 dark:hover:bg-gray-700 hover:bg-gray-300">
          <a href="#home">
            <h1 className="font-bold">Cipto Hadi</h1>
          </a>
        </div>

        {/* Middle */}
        <ul
          onMouseLeave={() => isSideMenuOpen && dispatch(toggleSideMenu())}
          className={
            (isSideMenuOpen ? "-translate-x-1 " : "translate-x-28 ") +
            "absolute right-0 md:static md:pr-32 z-50 flex flex-col items-center gap-2 bg-gray-50 border md:border-none md:rounded-none rounded-md shadow-md md:shadow-none dark:bg-gray-800 top-16 md:flex-row transition-transform duration-300 ease-in-out"
          }
        >
          <li className="nav-item">
            <a href="#home">home</a>
          </li>
          <li className="nav-item">
            <a href="#about">about</a>
          </li>
          <li className="nav-item">
            <a href="#projects">projects</a>
          </li>
          <li className="nav-item">
            <a href="#skills">skills</a>
          </li>
          <li className="nav-item">
            <a href="#contact">contact</a>
          </li>
        </ul>

        {/* Right */}
        <div className="absolute z-50 flex items-center justify-center gap-2 cursor-pointer right-2 md:static">
          <div onClick={() => dispatch(toggleMode())} className="btn">
            {themeMode === "dark" ? (
              <FaSun className="w-10 h-10 text-gray-100 bg-gray-900 rounded-full" />
            ) : (
              <FaMoon className="w-10 h-10 text-gray-900 rounded-full" />
            )}
          </div>

          <div
            className="btn md:hidden"
            onClick={() => dispatch(toggleSideMenu())}
          >
            {isSideMenuOpen ? (
              <FaTimes className="w-10 h-10" />
            ) : (
              <FaBars className="w-10 h-10" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
