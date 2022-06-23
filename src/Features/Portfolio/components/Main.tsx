import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setBottomReached } from "../../../store";
import { MainAbout } from "./MainAbout";
import { MainContact } from "./MainContact";
import { MainHome } from "./MainHome";
import { MainProjects } from "./MainProjects";
import { MainSkills } from "./MainSkills";

export const Main = () => {
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const { bottomReached } = useSelector((state: RootState) => state.app);

  const onScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

      if (scrollTop + clientHeight === scrollHeight) {
        dispatch(setBottomReached(true));
      } else if (bottomReached && scrollTop + clientHeight < scrollHeight) {
        dispatch(setBottomReached(false));
      }
    }
  };

  return (
    <main
      onScroll={onScroll}
      ref={scrollRef}
      className="w-full h-screen overflow-y-scroll scroll-smooth snap-mandatory snap-y scrollbar-none"
    >
      <MainHome />
      <MainAbout />
      <MainProjects />
      <MainSkills />
      <MainContact />
    </main>
  );
};
