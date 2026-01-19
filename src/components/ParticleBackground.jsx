import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground({ isDark }) {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 0.5,
                            color: isDark ? "#ef4444" : "#dc2626",
                        },
                    },
                    push: {
                        quantity: 2,
                    },
                },
            },
            particles: {
                color: {
                    value: isDark ? ["#ef4444", "#3b82f6", "#ffffff"] : ["#dc2626", "#2563eb", "#1f2937"],
                },
                links: {
                    color: isDark ? "#ef4444" : "#dc2626",
                    distance: 150,
                    enable: true,
                    opacity: 0.15,
                    width: 1,
                    triangles: {
                        enable: true,
                        opacity: 0.02,
                    },
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: {
                        default: "bounce",
                    },
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000,
                    },
                    value: 60,
                },
                opacity: {
                    value: { min: 0.1, max: 0.5 },
                    animation: {
                        enable: true,
                        speed: 1,
                        minimumValue: 0.1,
                    },
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [isDark]
    );

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
            className="fixed inset-0 -z-5 pointer-events-none"
        />
    );
}
