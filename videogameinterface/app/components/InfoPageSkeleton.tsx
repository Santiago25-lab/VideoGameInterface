"use client";

import { useEffect } from "react";

interface InfoPageSkeletonProps {
title: string;
children: React.ReactNode;
onBack: () => void;
}

export default function InfoPageSkeleton({ title, children, onBack }: InfoPageSkeletonProps) {
// Permite volver con la tecla Escape, una excelente práctica de UX.
useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
        onBack();
    }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
}, [onBack]);

return (
    <div className="min-h-screen flex flex-col items-center justify-center text-cyan-300 bg-black p-4 sm:p-8">
    {/* Fondo animado consistente con el resto del menú */}
    <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
    </div>

    {/* Contenedor principal de la información */}
    <div className="relative z-10 w-full max-w-4xl bg-black/50 border border-cyan-500/30 rounded-lg p-6 sm:p-8 text-left">
        {/* Título de la página (viene de las props) */}
        <h1
        className="text-4xl md:text-5xl font-black uppercase tracking-widest text-cyan-400 mb-8 text-center"
        style={{
            textShadow: `
            0 0 10px #22d3ee,
            0 0 20px #22d3ee
            `,
        }}
        >
        {title}
        </h1>

        {/* Área de contenido - Aquí es donde va tu información */}
        <div className="text-lg md:text-xl leading-relaxed space-y-6 text-cyan-200">
        {children}
        </div>
    </div>

    {/* Botón para volver */}
    <div className="absolute bottom-6 sm:bottom-10 z-30">
        <button
        onClick={onBack}
        className="px-8 py-3 border border-cyan-500 text-cyan-300
        hover:bg-cyan-500/20 transition-all duration-300 rounded-md text-lg uppercase tracking-wider"
        >
        ⬅ Volver
        </button>
    </div>
    </div>
);
}