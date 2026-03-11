import InfoPageSkeleton from "./InfoPageSkeleton";

interface VentajasScreenProps {
    onBack: () => void;
}

export default function VentajasScreen({ onBack }: VentajasScreenProps) {
    return (
        <InfoPageSkeleton title="Ventajas para los Usuarios" onBack={onBack}>
            <ul className="list-disc space-y-6 pl-5">
                <li>
                    <strong className="text-white">Accesibilidad:</strong>
                    <p className="mt-1 text-cyan-300">
                        Opciones como controles remapeables, subtítulos y modos para daltónicos hacen tu juego accesible a una audiencia mucho más amplia.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Rendimiento Personalizable:</strong>
                    <p className="mt-1 text-cyan-300">
                        Las opciones de video permiten que el juego funcione fluidamente en una gran variedad de ordenadores.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Personalización de la Jugabilidad:</strong>
                    <p className="mt-1 text-cyan-300">
                        Ajustes como el nivel de dificultad permiten que tanto jugadores novatos como veteranos disfruten del reto a su medida.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Comodidad:</strong>
                    <p className="mt-1 text-cyan-300">
                        Simplemente poder ajustar el volumen de la música o el brillo de la pantalla hace que la experiencia de juego sea mucho más cómoda.
                    </p>
                </li>
            </ul>
        </InfoPageSkeleton>
    );
}