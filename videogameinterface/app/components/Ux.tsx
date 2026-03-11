import InfoPageSkeleton from "./InfoPageSkeleton";

interface UxScreenProps {
    onBack: () => void;
}

export default function UxScreen({ onBack }: UxScreenProps) {
    return (
        <InfoPageSkeleton title="12 Leyes de UX en Videojuegos" onBack={onBack}>
            <ul className="list-disc space-y-6 pl-5">
                <li>
                    <strong className="text-white">Ley de Prägnanz:</strong>
                    <p className="mt-1 text-cyan-300">
                        Las personas interpretan las imágenes complejas como la forma más simple posible, porque es la interpretación que requiere el menor esfuerzo cognitivo.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Ley de Hick:</strong>
                    <p className="mt-1 text-cyan-300">
                        El tiempo que toma tomar una decisión aumenta con el número de alternativas y su complejidad.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Ley de Tesler (Conservación de la Complejidad):</strong>
                    <p className="mt-1 text-cyan-300">
                        Para cualquier sistema existe una cierta cantidad de complejidad que no se puede reducir.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Ley de Proximidad:</strong>
                    <p className="mt-1 text-cyan-300">
                        Los objetos que están cerca o próximos entre sí tienden a agruparse perceptualmente.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Efecto de Posición Serial:</strong>
                    <p className="mt-1 text-cyan-300">
                        Los usuarios tienen la tendencia de recordar mejor el primer y último elemento de una serie.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Ley de Fitts:</strong>
                    <p className="mt-1 text-cyan-300">
                        El tiempo para alcanzar un objetivo es proporcional a la distancia al mismo e inversamente proporcional a su tamaño.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Ley de Parkinson:</strong>
                    <p className="mt-1 text-cyan-300">
                        Cualquier tarea se inflará hasta ocupar todo el tiempo disponible para su realización.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Efecto Von Restorff (Aislamiento):</strong>
                    <p className="mt-1 text-cyan-300">
                        Cuando hay varios objetos similares presentes, es más probable que se recuerde el que difiere del resto.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Principio de Pareto (80/20):</strong>
                    <p className="mt-1 text-cyan-300">
                        Aproximadamente el 80% de los efectos provienen del 20% de las causas.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Efecto Zeigarnik:</strong>
                    <p className="mt-1 text-cyan-300">
                        Las personas recuerdan mejor las tareas incompletas o interrumpidas que las completadas.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Ley de Miller (7 ± 2):</strong>
                    <p className="mt-1 text-cyan-300">
                        La persona promedio solo puede mantener alrededor de 7 elementos (±2) en su memoria de trabajo.
                    </p>
                </li>
                <li>
                    <strong className="text-white">Ley de Jakob:</strong>
                    <p className="mt-1 text-cyan-300">
                        Los usuarios prefieren aquellos sistemas que funcionen igual que los que ya conocen.
                    </p>
                </li>
            </ul>
        </InfoPageSkeleton>
    );
}