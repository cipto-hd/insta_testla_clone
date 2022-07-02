import { useEffect, useState } from "react";
import { MainPage, Preloader } from "./features";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const [loading, setLoading] = useState(true);
  const themeMode = useSelector((state: RootState) => state.app.themeMode);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10000);
  }, []);

  return <>{loading ? <Preloader /> : <MainPage themeMode={themeMode} />}</>;
}

export default App;
