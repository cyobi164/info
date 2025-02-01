import React from "react";
import "./app.css"; // Global styles
import Toggle from "./components/Toggle"; // Import the Toggle component
import Header from "./components/Header"; // Import the Header component
import useLocalStorage from "use-local-storage";
import Info from './components/Info'
import CanvasAnimation from './components/CanvasAnimation';

export const App = () => {
  // Check system's dark mode preference
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  // Toggle dark mode
  const handleToggle = () => {
    setIsDark(!isDark); // Flip the value of `isDark`
  };

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      {/* Header Component */}
      <Header isChecked={isDark} handleChange={handleToggle}/>

      <Info />
    </div>
  );
};

export default App;
