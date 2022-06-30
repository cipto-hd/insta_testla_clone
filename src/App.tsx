import { useEffect, useState } from "react";
import { Preloader } from "./features";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Aos from "aos";
import "aos/dist/aos.css";
import { fixAosAnim } from "./utils";
import { Footer, Header, Main } from "./components";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);
  const themeMode = useSelector((state: RootState) => state.app.themeMode);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10000);
    Aos.init({ duration: 1000 });
    fixAosAnim();
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div
          className={
            themeMode +
            " w-full h-screen text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-50"
          }
        >
          <Header />
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
