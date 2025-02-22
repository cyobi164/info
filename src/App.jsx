import React from "react";
import "./app.css"; // Global styles
import Toggle from "./components/Toggle"; 
import Header from "./components/Header"; // Header now includes navigation
import useLocalStorage from "use-local-storage";
import Info from "./components/Info";
import ParticlesBackground from "./components/particles/ParticlesBackground";
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
        <ParticlesBackground isDark={isDark} />

        {/* Use Header instead of Navbar */}
        <Header isChecked={isDark} handleChange={handleToggle} />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
