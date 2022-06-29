import { useEffect, useRef } from "react";
import {
  AirBnbApp,
  LandingPage,
  MovieApiApp,
  MovieApp,
  PortfolioSite,
  WeatherApp,
} from "../assets/portfolio";
import { useInViewport } from "react-in-viewport";
import { useDispatch } from "react-redux";
import { ProjectThumb } from "./ProjectThumb";
import { setNextHash } from "../store";
import CustomPopup from "./Popup";

export const MainProjects = () => {
  const dispatch = useDispatch();
  const myRef = useRef(null);
  const { inViewport } = useInViewport(myRef, {}, { disconnectOnLeave: false });

  useEffect(() => {
    inViewport && dispatch(setNextHash("skills"));
  }, [inViewport]);

  const projects = [
    {
      thumb: AirBnbApp,
      title: "AirBnb Clone",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nihil.",
    },
    {
      thumb: LandingPage,
      title: "Landing Page",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nihil.",
    },
    {
      thumb: MovieApiApp,
      title: "Movie Api App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nihil.",
    },
    {
      thumb: MovieApp,
      title: "Movie App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nihil.",
    },
    {
      thumb: PortfolioSite,
      title: "Portfolio Site",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nihil.",
    },
    {
      thumb: WeatherApp,
      title: "Weather App",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nihil.",
    },
  ];

  return (
    <div id="projects" className="h-screen snap-start">
      <div className="container flex flex-col h-full pt-24 md:div-row">
        <h2 className="mt-4 text-2xl font-bold">Projects</h2>

        <div
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
          ref={myRef}
        >
          {projects.map(({ thumb, title, description }, i) => (
            <CustomPopup
              title={title}
              trigger={<ProjectThumb {...{ thumb }} />}
              key={i}
            >
              <div className="h-24 mx-auto rounded-md shadow-md w-44 md:w-60 md:h-36">
                <img
                  src={thumb}
                  alt="calc"
                  className="object-cover w-full h-full border rounded-md"
                />
              </div>
              <div className="my-2">
                <p>{description}</p>
              </div>
              <a
                href="https://megilan.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 py-1 mx-auto my-2 text-gray-600 bg-gray-200 rounded-md shadow-md cursor-pointer hover:font-semibold w-fit"
              >
                Check this out
              </a>
            </CustomPopup>
          ))}
        </div>
      </div>
    </div>
  );
};
