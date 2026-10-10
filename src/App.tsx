import { useEffect, useState } from "react";
import LoadingScreen from "./screens/LoadingScreen";
import EnvelopeScreen from "./screens/EnvelopeScreen";
import HomeScreen from "./screens/HomeScreen";

type Screen = "loading" | "envelope" | "home";

function App() {
  const [screen, setScreen] = useState<Screen>("loading");

  useEffect(() => {
    const timer = window.setTimeout(() => setScreen("envelope"), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  if (screen === "loading") return <LoadingScreen />;
  if (screen === "envelope") return <EnvelopeScreen onOpen={() => setScreen("home")} />;
  return <HomeScreen />;
}

export default App;
