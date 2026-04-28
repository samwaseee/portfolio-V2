"use client";
import React, { useEffect, useRef } from "react";
import { skills } from "../data/portfolioData";

export default function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const rawCodes = [
      ...skills.Frontend,
      ...skills.Backend,
      ...skills.Languages,
      "npm start",
      "git push",
      "<React />",
      "npm run dev",
      "justify-center",
      "while(true)",
      "console.log",
      "req, res, next",
    ];
    const codes = rawCodes.map((c) => c.split("")); 

    const fontSize = 16; 
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(0); 

    const resetProbability = 0.975; 

    const draw = () => {
      // 1. Slightly darker, more opaque trail so the codes don't blur into a mess
      ctx.fillStyle = "rgba(2, 6, 23, 0.15)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Bright Cyan Text
      ctx.fillStyle = "#22d3ee"; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const snippetIndex = Math.floor(Math.random() * codes.length);
        const snippet = codes[snippetIndex];
        const charIndex = Math.floor(Math.random() * snippet.length);
        const text = snippet[charIndex];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;

        if (drops[i] * fontSize > canvas.height && Math.random() > resetProbability) {
          drops[i] = 0;
        }
      }
    };

    const interval = setInterval(draw, 50); 

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      // Changed classes: Removed -z-10, added pointer-events-none, kept opacity subtle but visible
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40" 
    />
  );
}