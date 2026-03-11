import InfoPageSkeleton from "./InfoPageSkeleton";

interface BuenasPracticasScreenProps {
    onBack: () => void;
}

export default function BuenasPracticasScreen({ onBack }: BuenasPracticasScreenProps) {
    return (
        <InfoPageSkeleton title="Buenas Prácticas en Diseño de Interfaces" onBack={onBack}>
            <ul className="list-disc space-y-6 pl-5">
                <li>
                    <strong className="text-white">Consistencia:</strong>
                    <p className="mt-1 text-cyan-300">
                        Mantén un diseño y una lógica de navegación coherentes en todas las pantallas del menú.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Legibilidad:</strong>
                    <p className="mt-1 text-cyan-300">
                        Usa fuentes claras y un contraste de color suficiente entre el texto y el fondo.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Feedback Inmediato:</strong>
                    <p className="mt-1 text-cyan-300">
                        Proporciona una respuesta visual o sonora clara cuando el usuario interactúa con un elemento (hover, clic).
                    </p>
                </li>
                <li>
                    <strong className="text-white">Organización Lógica:</strong>
                    <p className="mt-1 text-cyan-300">
                        Agrupa las opciones relacionadas en categorías claras, como "Video", "Audio" o "Controles".
                    </p>
                </li>
            </ul>
        </InfoPageSkeleton>
    );
}