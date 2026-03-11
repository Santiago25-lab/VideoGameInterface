"use client";

import { useState, useEffect } from "react";
import InfoPageSkeleton from "./InfoPageSkeleton";

interface BuenasPracticasScreenProps {
    onBack: () => void;
}

interface PracticaItemProps {
    title: string;
    description: string;
    delay: number;
}

function PracticaItem({ title, description, delay }: PracticaItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <li
            className="relative pl-6 pb-6 border-l-2 border-cyan-500/30 transition-all duration-300"
            style={{
                animation: `slideInFromLeft 0.6s ease-out ${delay}s both`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Punto indicador animado */}
            <div
                className={`absolute -left-2 top-0 w-4 h-4 rounded-full transition-all duration-300 ${
                    isHovered
                        ? "bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                        : "bg-cyan-500/50"
                }`}
            >
                <div
                    className={`absolute inset-0 rounded-full bg-cyan-400 ${
                        isHovered ? "animate-ping" : ""
                    }`}
                ></div>
            </div>

            {/* Contenido */}
            <div
                className={`transition-all duration-300 ${
                    isHovered ? "translate-x-2" : ""
                }`}
            >
                <strong
                    className={`text-lg transition-all duration-300 ${
                        isHovered ? "text-cyan-300" : "text-white"
                    }`}
                >
                    {title}
                </strong>
                <p className="mt-2 text-cyan-300 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Línea de escaneo en hover */}
            {isHovered && (
                <div
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    style={{
                        background:
                            "linear-gradient(90deg, transparent, rgba(34,211,238,0.1), transparent)",
                        animation: "scan 2s linear infinite",
                    }}
                ></div>
            )}
        </li>
    );
}

export default function BuenasPracticasScreen({ onBack }: BuenasPracticasScreenProps) {
    const [pixels, setPixels] = useState<number[]>([]);
    const [flares, setFlares] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

    // Generar matriz de píxeles aleatorios
    useEffect(() => {
        const pixelCount = 150;
        const initialPixels = Array.from({ length: pixelCount }, () =>
            Math.random()
        );
        setPixels(initialPixels);

        // Animar píxeles aleatoriamente
        const interval = setInterval(() => {
            setPixels((prev) =>
                prev.map(() => (Math.random() > 0.7 ? Math.random() : 0))
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Generar destellos aleatorios
    useEffect(() => {
        const generateFlare = () => {
            const newFlare = {
                id: Date.now() + Math.random(),
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 100 + 50,
            };
            setFlares((prev) => [...prev, newFlare]);

            // Eliminar el destello después de la animación
            setTimeout(() => {
                setFlares((prev) => prev.filter((f) => f.id !== newFlare.id));
            }, 3000);
        };

        // Generar destellos cada 800ms
        const flareInterval = setInterval(generateFlare, 800);

        return () => clearInterval(flareInterval);
    }, []);

    const practicas = [
        {
            title: "UI Diegética:",
            description:
                "La UI diegética consiste en integrar los elementos de la interfaz dentro del mundo del juego, de manera que la información forme parte del entorno o del personaje. Esto ayuda a aumentar la inmersión y hace que la experiencia sea más natural para el jugador.",
        },
        {
            title: "Jerarquía Visual:",
            description:
                "La jerarquía visual permite organizar la información según su importancia. Utilizando tamaño, color y contraste, el diseño guía la atención del jugador hacia los elementos más relevantes de la interfaz.",
        },
        {
            title: "Consistencia:",
            description:
                "La consistencia se refiere a mantener un mismo estilo visual y funcional en toda la interfaz. Esto incluye el uso coherente de colores, tipografía, iconos y distribución de los elementos.",
        },
        {
            title: "Playtesting:",
            description:
                "El playtesting es el proceso de evaluar la interfaz mediante pruebas con usuarios. Este proceso permite identificar dificultades en la comprensión de los elementos de la interfaz y mejorar la experiencia del jugador.",
        },
        {
            title: "Menos es más:",
            description:
                "Una interfaz efectiva evita mostrar información innecesaria. Presentar solo los datos esenciales permite que el jugador se concentre en la jugabilidad sin distracciones.",
        },
        {
            title: "Legibilidad en acción:",
            description:
                "Los elementos visuales de la interfaz deben ser claros y fáciles de leer en todo momento, incluso durante situaciones de alta actividad dentro del juego.",
        },
    ];

    return (
        <InfoPageSkeleton title="Buenas Prácticas en Diseño de Interfaces" onBack={onBack}>
            {/* Fondo de píxeles animados */}
            <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
                <div 
                    className="absolute inset-0 p-8"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(20, 1fr)',
                        gap: '1rem'
                    }}
                >
                    {pixels.map((opacity, index) => (
                        <div
                            key={index}
                            className="w-2 h-2 rounded-sm transition-all duration-1000"
                            style={{
                                backgroundColor: `rgba(34, 211, 238, ${opacity})`,
                                boxShadow:
                                    opacity > 0.5
                                        ? `0 0 ${opacity * 10}px rgba(34, 211, 238, ${opacity})`
                                        : "none",
                                transform: `scale(${0.5 + opacity * 0.5})`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Destellos aleatorios */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                {flares.map((flare) => (
                    <div
                        key={flare.id}
                        className="absolute"
                        style={{
                            left: `${flare.x}%`,
                            top: `${flare.y}%`,
                            width: `${flare.size}px`,
                            height: `${flare.size}px`,
                            animation: 'flareAnimation 3s ease-out forwards',
                        }}
                    >
                        {/* Destello principal */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'radial-gradient(circle, rgba(34,211,238,0.6) 0%, rgba(34,211,238,0.3) 30%, transparent 70%)',
                            }}
                        ></div>
                        {/* Anillo expansivo */}
                        <div
                            className="absolute inset-0 rounded-full border-2 border-cyan-400"
                            style={{
                                animation: 'ringExpand 3s ease-out forwards',
                            }}
                        ></div>
                        {/* Partículas */}
                        <div
                            className="absolute top-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                            style={{ animation: 'particle1 3s ease-out forwards' }}
                        ></div>
                        <div
                            className="absolute top-1/2 left-0 w-1 h-1 bg-cyan-400 rounded-full"
                            style={{ animation: 'particle2 3s ease-out forwards' }}
                        ></div>
                        <div
                            className="absolute bottom-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                            style={{ animation: 'particle3 3s ease-out forwards' }}
                        ></div>
                        <div
                            className="absolute top-1/2 right-0 w-1 h-1 bg-cyan-400 rounded-full"
                            style={{ animation: 'particle4 3s ease-out forwards' }}
                        ></div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes slideInFromLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes scan {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                @keyframes flareAnimation {
                    0% {
                        opacity: 0;
                        transform: scale(0);
                    }
                    20% {
                        opacity: 1;
                        transform: scale(1);
                    }
                    80% {
                        opacity: 0.5;
                        transform: scale(1.5);
                    }
                    100% {
                        opacity: 0;
                        transform: scale(2);
                    }
                }

                @keyframes ringExpand {
                    0% {
                        opacity: 1;
                        transform: scale(0.5);
                    }
                    100% {
                        opacity: 0;
                        transform: scale(3);
                    }
                }

                @keyframes particle1 {
                    0% {
                        opacity: 1;
                        transform: translate(0, 0);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(0, -50px);
                    }
                }

                @keyframes particle2 {
                    0% {
                        opacity: 1;
                        transform: translate(0, 0);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50px, 0);
                    }
                }

                @keyframes particle3 {
                    0% {
                        opacity: 1;
                        transform: translate(0, 0);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(0, 50px);
                    }
                }

                @keyframes particle4 {
                    0% {
                        opacity: 1;
                        transform: translate(0, 0);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(50px, 0);
                    }
                }
            `}</style>

            <ul className="space-y-8 list-none pl-0">
                {practicas.map((practica, index) => (
                    <PracticaItem
                        key={index}
                        title={practica.title}
                        description={practica.description}
                        delay={index * 0.1}
                    />
                ))}
            </ul>
        </InfoPageSkeleton>
    );
}