import { AboutSvg } from "../assets/portfolio";
import { useInViewport } from "react-in-viewport";
import { useDispatch } from "react-redux";
import { setNextHash } from "../store";
import { useRef, useEffect } from "react";

export const MainAbout = () => {
  const dispatch = useDispatch();
  const myRef = useRef(null);
  const { inViewport } = useInViewport(myRef, {}, { disconnectOnLeave: false });

  useEffect(() => {
    inViewport && dispatch(setNextHash("projects"));
  }, [inViewport]);

  return (
    <div id="about" className="h-screen snap-start">
      <div className="container flex flex-col items-start h-full pt-24 md:flex-row">
        <img
          src={AboutSvg}
          alt="my pics here"
          className="mx-auto mt-5 w-52 aos md:w-80"
          data-aos="fade-down"
          data-aos-anchor="#about"
        />
        <div className="mt-5 ml-5 md:ml-20">
          <h2 ref={myRef}>About Me</h2>
          <p className="mb-4 aos" data-aos="fade-left" data-aos-anchor="#about">
            I am a FullStack Developer and passionate about everything related
            to technology, espespecially IT. Aside from coding, I enjoy biking
            to different places.
          </p>
          <button
            data-aos="fade-right"
            data-aos-anchor="#about"
            onClick={() => alert("Download Resume")}
            className="btn-hero"
          >
            Download My Resume
          </button>
        </div>
      </div>
    </div>
  );
};
