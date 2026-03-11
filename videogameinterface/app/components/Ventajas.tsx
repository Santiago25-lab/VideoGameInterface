import InfoPageSkeleton from "./InfoPageSkeleton";

interface VentajasScreenProps {
    onBack: () => void;
}

export default function VentajasScreen({ onBack }: VentajasScreenProps) {
    return (
        <InfoPageSkeleton title="Ventajas para los Usuarios" onBack={onBack}>
            <ul className="list-disc space-y-6 pl-5">
                <li>
                    <strong className="text-white">Decisiones más rápidas:</strong>
                    <p className="mt-1 text-cyan-300">
                        Información clara y bien jerarquizada permite reaccionar en situaciones de alta presión sin hesitación.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Menor frustración:</strong>
                    <p className="mt-1 text-cyan-300">
                        Un diseño intuitivo reduce errores causados por confusión en los controles o la lectura del mapa.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Mayor satisfacción:</strong>
                    <p className="mt-1 text-cyan-300">
                        Animaciones de recompensa (subir de nivel, logros) generan una respuesta dopaminérgica y sensación de logro.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Personalización accesible:</strong>
                    <p className="mt-1 text-cyan-300">
                        Interfaces adaptables (tamaño de HUD, modo daltónico, subtítulos) hacen el juego inclusivo para todos.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Confianza e Inmersión:</strong>
                    <p className="mt-1 text-cyan-300">
                        Cuando la UI responde de forma consistente y predecible, el jugador confía en el juego y se sumerge más profundamente en la experiencia.
                    </p>
                </li>
            </ul>
        </InfoPageSkeleton>
    );
}