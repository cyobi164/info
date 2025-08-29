import React from "react";
import "./app.css"; // Global styles
import Toggle from "./components/light_and_dark/Toggle"; 
import useLocalStorage from "use-local-storage";
import Info from "./components/bio/Info";
// import ParticlesBackground from "./components/particles/ParticlesBackground";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; 

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        {/* Background particle animation */}
        {/* <ParticlesBackground isDark={isDark} /> */}

        {/* Dark/Light Mode Toggle */}
        <Toggle isChecked={isDark} handleChange={handleToggle} />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
