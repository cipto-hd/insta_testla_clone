import { useEffect, useState } from "react";
import { Portfolio, Preloader } from "./Features";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { styles, css } from "./Features/Animation";

function App() {
  const [loading, setLoading] = useState(true);
  const themeMode = useSelector((state: RootState) => state.app.themeMode);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10000);
  }, []);

  return (
    <>
      {/* {loading ? (
        <Preloader />
      ) : ( */}
      <section className={`${themeMode} ${css(styles.fadeIn)}`}>
        <Portfolio />
      </section>
      {/*  )} */}
    </>
  );
}

export default App;
