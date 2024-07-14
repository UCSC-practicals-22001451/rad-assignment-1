import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import NavBar from "./components/NavBar/NavBar";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home/HomePage"));
const About = lazy(() => import("./pages/About/AboutPage"));
const Contact = lazy(() => import("./pages/Contact/ContactPage"));
const Slideshow = lazy(() => import("./pages/About/Slides"));
const Team = lazy(() => import("./pages/About/Team"));
const TrainingPrograms = lazy(() => import("./pages/About/TrainingProgram"));
const Testimonials = lazy(() => import("./pages/About/Testimonials"));
const LoadingScreen = lazy(() =>
  import("./components/LoadingScreen/LoadingScreen")
);

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="slideshow" element={<Slideshow />} />
              <Route path="team" element={<Team />} />
              <Route path="training-programs" element={<TrainingPrograms />} />
              <Route path="testimonials" element={<Testimonials />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
