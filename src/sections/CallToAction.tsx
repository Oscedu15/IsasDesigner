'use client';

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const [scope, animate] = useAnimate();
    const animationControls = useRef<AnimationPlaybackControls | null>(null);

    useEffect(() => {
        // Iniciar la animación y almacenar el control en la referencia
        animationControls.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 30, ease: "linear", repeat: Infinity }
        );

        // Limpiar la animación al desmontar el componente
        return () => {
            animationControls.current?.stop(); // Detener la animación si es necesario
        };
    }, [animate, scope]);

    useEffect(() => {
        if (animationControls.current) {
            // Detener la animación actual
            animationControls.current.stop();

            // Reiniciar la animación con la nueva velocidad
            const newDuration = isHovered ? 60 : 30; // Cambia la duración según el estado
            animationControls.current = animate(
                scope.current,
                { x: "-50%" },
                { duration: newDuration, ease: "linear", repeat: Infinity }
            );
        }
    }, [isHovered, animate, scope]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 10 })?.map((_, i) => (
                        <div key={i} className="flex items-center gap-16 ">
                            <span className="text-lime-400 text-7xl">
                                &#10038;
                            </span>
                            <span className="group-hover:text-lime-400">Try it for free</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}