import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ReactRotatingText from "react-rotating-text";
import { styles, css } from "../../Animation";
import { DevSvg } from "./../../../assets/portfolio";

export const MainHome = () => {
  return (
    <div id="home" className="h-screen snap-start">
      <div className="container flex flex-col items-start h-full gap-10 pt-24 md:flex-row">
        <div
          className={css(styles.fadeInRight, styles.fadeIn) + " md:flex-auto"}
        >
          <h3>Hi there,</h3>
          <h2 className="mt-2">
            I am{" "}
            <span className="font-bold text-blue-600 dark:text-blue-300">
              <ReactRotatingText
                items={[
                  "Cipto Hadi",
                  "a Web Developer",
                  "a NestJs Developer",
                  "a Laravel Developer",
                  "a React Developer",
                ]}
              />
            </span>
          </h2>
          <p>
            I build web experience and awesome web app, <br /> i solve variant
            web problem and also write code <br /> to make things works
          </p>

          <a
            href="https://wa.me/23408032347546?text=HELLO%20CURPRA%20CODE,%20%20PLEASE%20I%20NEED%20WEBSITE%20OR%20WEB-APP%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              data-entrance="from-top"
              className="px-6 py-2 mt-4 uppercase transition-colors duration-300 ease-in-out bg-gray-300 rounded-lg hover:bg-gray-600 hover:text-gray-100 dark:text-gray-800 dark:hover:text-gray-100"
            >
              hire me
            </button>
          </a>
          <div className="flex flex-row gap-2 mt-6">
            <a
              href="https://github.com/CurpraCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-link" />
            </a>
            <a
              href="https://www.linkedin.com/in/curtis-oyakoya-b70b091b2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-link" />
            </a>
            <a
              href="https://twitter.com/CurpraCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-link" />
            </a>
          </div>
        </div>

        <img
          src={DevSvg}
          alt="my pics here"
          className={
            css(styles.fadeInLeft, styles.fadeIn) + " mx-auto mt-8 w-80"
          }
        />
      </div>
    </div>
  );
};
