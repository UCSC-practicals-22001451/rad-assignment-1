import "./App.css";
import { useTheme } from "./context/ThemeContext";
import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
