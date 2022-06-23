import { useRef } from "react";
import { AboutSvg } from "../../../assets/portfolio";
import { styles, css } from "../../Animation";
import { useInViewport } from "react-in-viewport";

export const MainAbout = () => {
  const myRef = useRef(null);
  const { inViewport, enterCount } = useInViewport(
    myRef,
    {},
    { disconnectOnLeave: false }
  );

  return (
    <div id="about" className="h-screen snap-start">
      <div className="container flex flex-col items-start h-full pt-24 md:flex-row">
        <img
          src={AboutSvg}
          alt="my pics here"
          className={
            (inViewport ? css(styles.bounceInLeft) : "") + " mx-auto mt-8 w-52"
          }
        />
        <div className="mt-5 ml-5">
          <h2 className={inViewport ? css(styles.bounceInRight) : ""}>
            About Me
          </h2>{" "}
          <span ref={myRef}></span>
          <p className={(inViewport ? css(styles.bounceInLeft) : "") + " mb-4"}>
            I am a FullStack Developer. I've been always passionate about
            everything related to technology, espespecially IT. I also love to
            code things from scratch, and enjoy bringing ideas to life in the
            browser and mobile device, combining the acquisition of new
            knowledges and experiences on various projects. Aside from coding, I
            enjoy biking to different places.
          </p>
          <a
            href=""
            className={
              (inViewport ? css(styles.bounceInRight) : "") +
              " block w-fit px-4 py-1 bg-gray-400 border rounded-xl"
            }
          >
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
};
