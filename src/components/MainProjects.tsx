import { FaEye } from "react-icons/fa";
import {
  AirBnbApp,
  LandingPage,
  MovieApiApp,
  MovieApp,
  PortfolioSite,
  WeatherApp,
} from "../assets/portfolio";

export const MainProjects = () => {
  return (
    <div id="projects" className="h-screen snap-start">
      <div className="container flex flex-col h-full pt-24 md:div-row">
        <h2 className="mt-4 text-2xl font-bold">Projects</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <div
            className="relative flex flex-col w-40 h-24"
            data-aos="zoom-in"
            data-anchor="#projects"
          >
            <img
              src={AirBnbApp}
              alt="calc"
              className="object-cover w-full h-full border-2 border-blue-500 rounded-md"
            />
            <div className="hidden w-full h-full detail-card hover:inline-flex">
              <h2>WEATHER APP</h2>
              <p>
                This UI weather application was built with React, Redux,
                Chakra-UI, TypeScript, it is also responsive to mobile view
              </p>
            </div>
            <a
              href="https://curpraweather.vercel.app/"
              className="absolute w-12 h-12 left-14 top-6"
            >
              <FaEye className="w-full h-full text-gray-800 bg-transparent rounded-full hover:bg-gray-800 hover:text-gray-100" />
            </a>
          </div>

          <div
            className="relative flex flex-col w-40 h-24 "
            data-aos="zoom-in"
            data-anchor="#projects"
          >
            <img
              src={MovieApiApp}
              alt="calc"
              className="object-cover w-full h-full border-2 border-blue-500 rounded-md "
            />
            <div className="hidden detail-card">
              <h2>WEATHER APP</h2>
              <p>
                This UI weather application was built with React, Redux,
                Chakra-UI, TypeScript, it is also responsive to mobile view
              </p>
            </div>
            <a
              href="https://curpraweather.vercel.app/"
              className="absolute w-12 h-12 left-14 top-6"
            >
              <FaEye className="w-full h-full text-gray-800 bg-transparent rounded-full hover:bg-gray-800 hover:text-gray-100" />
            </a>
          </div>
          <div
            className="relative flex flex-col w-40 h-24"
            data-aos="zoom-in"
            data-anchor="#projects"
          >
            <img
              src={MovieApp}
              alt="calc"
              className="object-cover w-full h-full border-2 border-blue-500 rounded-md"
            />
            <div className="hidden detail-card">
              <h2>WEATHER APP</h2>
              <p>
                This UI weather application was built with React, Redux,
                Chakra-UI, TypeScript, it is also responsive to mobile view
              </p>
            </div>

            <a
              href="https://curpraweather.vercel.app/"
              className="absolute w-12 h-12 left-14 top-6"
            >
              <FaEye className="w-full h-full text-gray-800 bg-transparent rounded-full hover:bg-gray-800 hover:text-gray-100" />
            </a>
          </div>
          <div
            className="relative flex flex-col w-40 h-24 "
            data-aos="zoom-in"
            data-anchor="#projects"
          >
            <img
              src={PortfolioSite}
              alt="calc"
              className="object-cover w-full h-full border-2 border-blue-500 rounded-md"
            />
            <div className="absolute hidden w-full h-full">
              <h2>WEATHER APP</h2>
              <p>
                This UI weather application was built with React, Redux,
                Chakra-UI, TypeScript, it is also responsive to mobile view
              </p>
            </div>
            <a
              href="https://curpraweather.vercel.app/"
              className="absolute w-12 h-12 left-14 top-6"
            >
              <FaEye className="w-full h-full text-gray-800 bg-transparent rounded-full hover:bg-gray-800 hover:text-gray-100" />
            </a>
          </div>
          <div
            className="relative flex flex-col w-40 h-24 "
            data-aos="zoom-in"
            data-anchor="#projects"
          >
            <img
              src={WeatherApp}
              alt="calc"
              className="object-cover w-full h-full border-2 border-blue-500 rounded-md"
            />
            <div className="hidden detail-card">
              <h2>WEATHER APP</h2>
              <p>
                This UI weather application was built with React, Redux,
                Chakra-UI, TypeScript, it is also responsive to mobile view
              </p>
            </div>
            <a
              href="https://curpraweather.vercel.app/"
              className="absolute w-12 h-12 left-14 top-6"
            >
              <FaEye className="w-full h-full text-gray-800 bg-transparent rounded-full hover:bg-gray-800 hover:text-gray-100" />
            </a>
          </div>
          <div
            className="relative flex flex-col w-40 h-24 "
            data-aos="zoom-in"
            data-anchor="#projects"
          >
            <img
              src={LandingPage}
              alt="calc"
              className="object-cover w-full h-full border-2 border-blue-500 rounded-md"
            />
            <div className="hidden detail-card">
              <h2>WEATHER APP</h2>
              <p>
                This UI weather application was built with React, Redux,
                Chakra-UI, TypeScript, it is also responsive to mobile view
              </p>
            </div>
            <a
              href="https://curpraweather.vercel.app/"
              className="absolute w-12 h-12 left-14 top-6"
            >
              <FaEye className="w-full h-full text-gray-800 bg-transparent rounded-full hover:bg-gray-800 hover:text-gray-100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
