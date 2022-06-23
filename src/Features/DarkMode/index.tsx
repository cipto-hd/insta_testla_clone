import { useState } from "react";

const defaultThemeMode = "dark";

export const DarkMode = () => {
  const [themeMode, setThemeMode] = useState(defaultThemeMode);

  const toggleThemeMode = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  return (
    <div className={themeMode + " w-screen h-screen"}>
      <div className="flex flex-col items-center justify-center w-full h-full px-10 text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200">
        <h1 className="font-bold text-7xl">Hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eos
          officia reprehenderit quia totam! Nobis quis minima, vitae
          necessitatibus molestias ipsum! Impedit modi ipsa, asperiores quaerat
          est eos reprehenderit magnam.
        </p>

        <button
          onClick={toggleThemeMode}
          className="px-4 py-2 font-semibold text-gray-200 bg-gray-800 rounded-full dark:text-gray-800 dark:bg-gray-200"
        >
          Toggle DarkMode
        </button>
      </div>
    </div>
  );
};
