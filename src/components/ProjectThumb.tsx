import { MouseEventHandler } from "react";

interface IProjectThumb {
  thumb: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}
export const ProjectThumb = ({ thumb, onClick }: IProjectThumb) => {
  return (
    <div
      className="relative flex flex-col h-24 cursor-pointer w-44 md:w-60 md:h-36"
      data-aos="zoom-in"
      data-anchor="#projects"
      {...(onClick && { onClick })}
    >
      <img
        src={thumb}
        alt="calc"
        className="object-cover w-full h-full mx-auto border-2 border-blue-500 rounded-md"
      />
    </div>
  );
};
