import React, { useRef, useEffect } from "react";

const CanvasAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const w = window.innerWidth;
    const h = 300; // Limit height to top section only
    const rate = 60;
    const arc = 100;
    const size = 7;
    const speed = 20;
    const colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
    let parts = [];
    let time = 0;

    // Set canvas size for only top section
    canvas.width = w;
    canvas.height = h;

    // Create particles
    const createParticles = () => {
      parts = Array.from({ length: arc }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        toX: Math.random() * 5 - 1,
        toY: Math.random() * 2 - 1,
        c: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * size,
      }));
    };

    // Particle animation
    const particles = () => {
      ctx.clearRect(0, 0, w, h);
      parts.forEach((li) => {
        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.fill();

        li.x += li.toX * (time * 0.05);
        li.y += li.toY * (time * 0.05);

        if (li.x > w) li.x = 0;
        if (li.y > h) li.y = 0;
        if (li.x < 0) li.x = w;
        if (li.y < 0) li.y = h;
      });

      if (time < speed) time++;
      setTimeout(particles, 1000 / rate);
    };

    // Initialize particles and start animation
    createParticles();
    particles();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="test"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "300px", // Limit height to top section
        zIndex: "-1", // Keep it behind content
      }}
    />
  );
};

export default CanvasAnimation;
