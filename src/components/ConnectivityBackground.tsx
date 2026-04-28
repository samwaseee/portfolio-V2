"use client";
import React, { useEffect, useRef } from "react";

export default function ConnectivityBackground() {
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

    // Node and Connection setup
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const nodeCount = 50; // Sparser network
    const connectionRadius = 150;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // Slow, elegant drift
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      // Base dark field with subtle fade
      ctx.fillStyle = "rgba(10, 10, 10, 0.1)"; // Deep Black match
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 1;
      
      // Draw and connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Update position with drift
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node (very subtle gray point)
        ctx.fillStyle = "rgba(100, 100, 100, 0.2)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.random() > 0.9 ? Math.PI : Math.PI * 2); // Occasional 'open' circles
        ctx.fill();

        // Connect nodes to neighbors within radius
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j];
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionRadius) {
            // Lines are also very subtle and gray
            ctx.strokeStyle = `rgba(150, 150, 150, ${1 - distance / connectionRadius})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        }
      }
    };

    const interval = setInterval(draw, 45); // Set interval for smooth, slow flow

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      // Pointer-events-none is crucial so it doesn't block clicks on content
      className="absolute inset-0 w-full h-full pointer-events-none" 
    />
  );
}