import InfoPageSkeleton from "./InfoPageSkeleton";

interface EjemplosScreenProps {
    onBack: () => void;
}

export default function EjemplosScreen({ onBack }: EjemplosScreenProps) {
    return (
        <InfoPageSkeleton title="Ejemplos en Este Proyecto" onBack={onBack}>
            <ul className="list-disc space-y-6 pl-5">
                <li>
                    <strong className="text-white">MenuButton.tsx:</strong>
                    <p className="mt-1 text-cyan-300">
                        Un gran ejemplo de feedback visual. El estado `hover` cambia la escala y el fondo, comunicando claramente al usuario que el botón es interactivo.
                    </p>
                </li>
                <li>
                    <strong className="text-white">CreditsScreen.tsx:</strong>
                    <p className="mt-1 text-cyan-300">
                        El uso de una animación de scroll y una estética cuidada ayuda a establecer el tono y a dar un acabado profesional al proyecto.
                    </p>
                </li>
            </ul>
        </InfoPageSkeleton>
    );
}