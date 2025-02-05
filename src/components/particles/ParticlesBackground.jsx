import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = ({ isDark }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles Init Function Called");
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: isDark ? "#121212" : "#ffffff" }, // Change based on theme
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          links: {
            enable: true,
            distance: 150, // Adjust the distance for connecting lines
            color: isDark ? "#ffffff" : "#000000", // Adjust based on theme
            opacity: 0.4,
            width: 1.5,
          },
          move: { enable: true, speed: 2, direction: "none", outModes: { default: "out" } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
