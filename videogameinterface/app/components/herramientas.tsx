import InfoPageSkeleton from "./InfoPageSkeleton";

interface HerramientasScreenProps {
    onBack: () => void;
}

export default function HerramientasScreen({ onBack }: HerramientasScreenProps) {
    return (
        <InfoPageSkeleton title="Herramientas Útiles" onBack={onBack}>
            <ul className="list-disc space-y-6 pl-5">
                <li>
                    <strong className="text-white">Diseño y Prototipado:</strong>
                    <p className="mt-1 text-cyan-300">
                        Herramientas como <strong className="text-white">Figma, Sketch o Adobe XD</strong> son ideales para diseñar la apariencia visual y el flujo de navegación de los menús antes de escribir código.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Desarrollo:</strong>
                    <p className="mt-1 text-cyan-300">
                        Tecnologías como <strong className="text-white">React/Next.js</strong> para componentes de UI, y <strong className="text-white">Tailwind CSS</strong> para estilos rápidos y consistentes.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Pruebas de Accesibilidad:</strong>
                    <p className="mt-1 text-cyan-300">
                        Librerías como <strong className="text-white">`axe-core`</strong> para auditorías automáticas y pruebas manuales con lectores de pantalla como <strong className="text-white">NVDA</strong> o <strong className="text-white">VoiceOver</strong>.
                    </p>
                </li>
            </ul>
        </InfoPageSkeleton>
    );
}