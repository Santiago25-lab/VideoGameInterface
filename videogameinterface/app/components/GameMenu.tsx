"use client";

import { useState, useEffect } from "react";

interface MenuButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

function MenuButton({ children, onClick, variant = "primary" }: MenuButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative w-64 py-4 px-8 font-bold text-xl uppercase tracking-wider
        transition-all duration-300 ease-out transform
        ${variant === "primary" 
          ? "text-cyan-400 hover:text-cyan-200" 
          : "text-purple-400 hover:text-purple-200"
        }
        ${isHovered ? "scale-110" : "scale-100"}
      `}
      style={{
        textShadow: isHovered 
          ? "0 0 20px currentColor, 0 0 40px currentColor" 
          : "0 0 10px currentColor",
      }}
    >
      {/* Background glow effect */}
      <span 
        className={`absolute inset-0 rounded-lg transition-all duration-300 ${
          isHovered 
            ? "bg-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.5)]" 
            : "bg-transparent border border-cyan-500/30"
        }`}
      />
      
      {/* Scanline effect */}
      {isHovered && (
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="absolute top-0 left-0 right-0 h-1 bg-cyan-300/50 animate-scanline" />
        </span>
      )}
      
      {/* Button text */}
      <span className="relative z-10 flex items-center justify-center gap-3">
        <span className={`w-2 h-2 ${isHovered ? "bg-cyan-400" : "bg-cyan-500/50"}`} 
              style={{ boxShadow: isHovered ? "0 0 10px #22d3ee" : "none" }} 
        />
        {children}
        <span className={`w-2 h-2 ${isHovered ? "bg-cyan-400" : "bg-cyan-500/50"}`}
              style={{ boxShadow: isHovered ? "0 0 10px #22d3ee" : "none" }}
        />
      </span>
    </button>
  );
}

export default function GameMenu() {
  const [mounted, setMounted] = useState(false);
  const [activeOption, setActiveOption] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePlay = () => {
    setActiveOption("play");
    console.log("Starting game...");
  };

  const handleOptions = () => {
    setActiveOption("options");
    console.log("Opening options...");
  };

  const handleCredits = () => {
    setActiveOption("credits");
    console.log("Opening credits...");
  };

  if (!mounted) return null;

  return (
    <div className="game-menu">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-pulse opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
      </div>

      {/* Main menu container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Game title */}
        <div className="mb-16 text-center">
          <h1 
            className="text-6xl md:text-8xl font-black uppercase tracking-widest"
            style={{
              color: "#22d3ee",
              textShadow: `
                0 0 10px #22d3ee,
                0 0 20px #22d3ee,
                0 0 40px #22d3ee,
                0 0 80px #0891b2
              `,
              animation: "title-glow 2s ease-in-out infinite alternate",
            }}
          >
            Cyber
            <span 
              className="text-white"
              style={{
                textShadow: `
                  0 0 10px #ffffff,
                  0 0 20px #ffffff
                `,
              }}
            >
              Nexus
            </span>
          </h1>
          <p 
            className="mt-4 text-cyan-300 text-lg md:text-xl tracking-[0.5em] uppercase"
            style={{
              textShadow: "0 0 10px #22d3ee",
              animation: "subtitle-pulse 1.5s ease-in-out infinite",
            }}
          >
            Enter the Digital Realm
          </p>
        </div>

        {/* Menu buttons */}
        <div className="flex flex-col gap-6">
          <MenuButton onClick={handlePlay}>
            ▶ Play
          </MenuButton>
          
          <MenuButton onClick={handleOptions}>
            ⚙ Options
          </MenuButton>
          
          <MenuButton onClick={handleCredits} variant="secondary">
            ★ Credits
          </MenuButton>
        </div>

        {/* Version info */}
        <div className="absolute bottom-8 text-cyan-600 text-sm">
          v1.0.0 | © 2026 Cyber Nexus Studios
        </div>

        {/* Decorative elements */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 bg-cyan-500/50 rounded-full"
              style={{
                animation: `decorative-pulse ${1 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 bg-cyan-500/50 rounded-full"
              style={{
                animation: `decorative-pulse ${1 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes title-glow {
          from {
            filter: brightness(1);
          }
          to {
            filter: brightness(1.2);
          }
        }

        @keyframes subtitle-pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes grid-pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        @keyframes decorative-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes scanline {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(100vh);
          }
        }

        .animate-grid-pulse {
          animation: grid-pulse 4s ease-in-out infinite;
        }

        .animate-scanline {
          animation: scanline 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
