import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = ({ isDark }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this to your desired mobile breakpoint
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        background: { color: isDark ? "#121212" : "#ffffff" },
        particles: {
          color: {
            value: isDark ? "#ffffff" : "#000000",
          },
          number: {
            value: isMobile ? 50 : 100, // Decrease particle number for mobile
            density: {
              enable: true,
              value_area: isMobile ? 400 : 800, // Adjust density for mobile
            },
          },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: isMobile ? 2 : 3, random: true }, // Smaller size for mobile
          links: {
            enable: true,
            distance: 150,
            color: isDark ? "#ffffff" : "#000000",
            opacity: 0.4,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: { default: "out" },
          },
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
