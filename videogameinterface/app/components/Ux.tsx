import InfoPageSkeleton from "./InfoPageSkeleton";

interface UxScreenProps {
    onBack: () => void;
}

export default function UxScreen({ onBack }: UxScreenProps) {
    return (
        <InfoPageSkeleton title="¿Cómo Mejorar la Experiencia de Usuario (UX)?" onBack={onBack}>
            <ul className="list-disc space-y-6 pl-5">
                <li>
                    <strong className="text-white">Reducir la Fricción:</strong>
                    <p className="mt-1 text-cyan-300">
                        Permitir a los jugadores acceder a lo que buscan (jugar, cambiar opciones, ver créditos) de forma rápida y sin esfuerzo. Un menú intuitivo es clave.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Empoderar al Usuario:</strong>
                    <p className="mt-1 text-cyan-300">
                        Ofrecer opciones de personalización (gráficos, sonido, controles) hace que el jugador sienta que tiene el control sobre su experiencia.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Establecer el Tono del Juego:</strong>
                    <p className="mt-1 text-cyan-300">
                        El diseño visual, la música y las animaciones del menú sumergen al jugador en el universo del juego desde el primer momento.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Proporcionar Claridad:</strong>
                    <p className="mt-1 text-cyan-300">
                        Comunicar de forma efectiva las opciones disponibles y el estado actual del sistema (por ejemplo, qué opción está seleccionada).
                    </p>
                </li>
            </ul>
        </InfoPageSkeleton>
    );
}