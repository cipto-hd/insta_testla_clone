import { AboutSvg } from "../assets/portfolio";

export const MainAbout = () => {
  return (
    <div id="about" className="h-screen snap-start">
      <div className="container flex flex-col items-start h-full pt-24 md:flex-row">
        <img
          src={AboutSvg}
          alt="my pics here"
          className="mx-auto mt-5 w-52 aos"
          data-aos="fade-down"
          data-aos-anchor="#about"
        />
        <div className="mt-5 ml-5">
          <h2>About Me</h2>
          <p className="mb-4 aos" data-aos="fade-left" data-aos-anchor="#about">
            I am a FullStack Developer. I've been always passionate about
            everything related to technology, espespecially IT. I also love to
            code things from scratch, and enjoy bringing ideas to life in the
            browser and mobile device, combining the acquisition of new
            knowledges and experiences on various projects. Aside from coding, I
            enjoy biking to different places.
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
