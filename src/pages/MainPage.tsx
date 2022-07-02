import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.min.css";
import { Footer, Header, Main } from "../components";
import { fixAosFromStarting } from "../utils";

export const MainPage = ({ themeMode }: { themeMode: string }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    fixAosFromStarting();
    !!window.location.hash && (window.location.href = window.location.hash); // on window load, scroll page based on hash
  }, []);

  return (
    <div
      className={
        themeMode +
        " w-full h-screen text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-50"
      }
    >
      <Header />
      <Main />
      <Footer />
      <ToastContainer limit={1} autoClose={3000} />
    </div>
  );
};
