import InfoPageSkeleton from "./InfoPageSkeleton";

interface HerramientasScreenProps {
    onBack: () => void;
}

export default function HerramientasScreen({ onBack }: HerramientasScreenProps) {
    return (
        <InfoPageSkeleton title="HERRAMIENTAS" onBack={onBack}>
            <div className="space-y-8">
                <h2 className="text-3xl font-bold uppercase text-white md:text-4xl">Diseño & Prototipado</h2>
                <ul className="list-disc space-y-6 pl-5">
                    <li>
                        <strong className="text-white">Figma:</strong>
                        <p className="mt-1 text-cyan-300">
                            Diseño colaborativo de mockups, prototipos interactivos y sistemas de diseño.
                        </p>
                    </li>
                    <li>
                        <strong className="text-white">Adobe XD / PS:</strong>
                        <p className="mt-1 text-cyan-300">
                            Assets gráficos de alta fidelidad, iconos y composición visual.
                        </p>
                    </li>
                </ul>

                <h2 className="text-3xl font-bold uppercase text-white md:text-4xl">Motores de Juego</h2>
                <ul className="list-disc space-y-6 pl-5">
                    <li>
                        <strong className="text-white">Unity UI Toolkit:</strong>
                        <p className="mt-1 text-cyan-300">
                            Sistema nativo de Unity para HUDs, menús y elementos de juego en tiempo real.
                        </p>
                    </li>
                    <li>
                        <strong className="text-white">Unreal UMG:</strong>
                        <p className="mt-1 text-cyan-300">
                            Editor visual de UI en Unreal Engine con soporte para animaciones y lógica Blueprint.
                        </p>
                    </li>
                </ul>

                <h2 className="text-3xl font-bold uppercase text-white md:text-4xl">Animación UI</h2>
                <ul className="list-disc space-y-6 pl-5">
                    <li>
                        <strong className="text-white">Spine:</strong>
                        <p className="mt-1 text-cyan-300">
                            Animación 2D esqueletal para iconos, barras de vida y efectos de habilidades animadas.
                        </p>
                    </li>
                    <li>
                        <strong className="text-white">DragonBones:</strong>
                        <p className="mt-1 text-cyan-300">
                            Alternativa open-source de animación 2D, integrable en Unity y Cocos2D.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="mt-10 text-right text-sm text-cyan-600">
                <p>Notas: B8, HI</p>
            </div>
        </InfoPageSkeleton>
    );
}
