import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import NavBar from "./components/NavBar/NavBar";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home/HomePage"));
const About = lazy(() => import("./pages/About/AboutPage"));
const Contact = lazy(() => import("./pages/Contact/ContactPage"));
const LoadingScreen = lazy(() =>
  import("./components/LoadingScreen/LoadingScreen")
);

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  const [isLoading, setIsLoading] = useState(false);
  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  useEffect(() => {
    // Listen to page navigation start and stop events
    window.addEventListener("navigationstart", startLoading);
    window.addEventListener("navigationend", stopLoading);

    // Cleanup
    return () => {
      window.removeEventListener("navigationstart", startLoading);
      window.removeEventListener("navigationend", stopLoading);
    };
  }, []);

  // useEffect(() => {
  //   // Example: Automatically navigate to "/about" with loading after component mounts
  //   navigateWithDelay("/about");
  // });

  return (
    <Router>
      <div className="App">
        {isLoading && <LoadingScreen />}

        <NavBar
          isLoading={isLoading}
          startLoading={startLoading}
          stopLoading={stopLoading}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
