'use client';
import { useState, useEffect, useCallback } from 'react';
import { Particles } from "react-tsparticles";
import { loadFull } from 'tsparticles';
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

const Fireworks: React.FC = () => {
    const particlesInit = useCallback(async (engine: any) => {
        console.log(engine);
        // await loadFull(engine);
        await loadFireworksPreset(engine);
    }, []);
  
    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);

    return (
        <Particles 
            id="tsparticles"
            className=""
            // options={{
            //     fullScreen: {
            //         enable: true
            //     },
            //     detectRetina: true,
            //     background: {
            //         color: "#000"
            //     },
            //     fpsLimit: 60,
            //     emitters: {
            //         direction: "top",
            //         life: {
            //             count: 0,
            //             duration: 0.1,
            //             delay: 0.1
            //         },
            //         rate: {
            //             delay: 0.05,
            //             quantity: 1
            //         },
            //         size: {
            //             width: 100,
            //             height: 0
            //         },
            //         position: {
            //             y: 100,
            //             x: 50
            //         }
            //     },
            //     particles: {
            //         number: {
            //             value: 0
            //         },
            //         destroy: {
            //             mode: "split",
            //             split: {
            //                 count: 1,
            //                 factor: { value: 1 / 3 },
            //                 rate: {
            //                     value: 100
            //                 },
            //                 particles: {
            //                     color: {
            //                         value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
            //                     },
            //                     stroke: {
            //                         width: 0
            //                     },
            //                     number: {
            //                         value: 0
            //                     },
            //                     collisions: {
            //                         enable: false
            //                     },
            //                     opacity: {
            //                         value: 1,
            //                         animation: {
            //                             enable: true,
            //                             speed: 0.6,
            //                             minimumValue: 0.1,
            //                             sync: false,
            //                             startValue: "max",
            //                             destroy: "min"
            //                         }
            //                     },
            //                     shape: {
            //                         type: "circle"
            //                     },
            //                     size: {
            //                         value: { min: 2, max: 3 },
            //                         animation: {
            //                             enable: false
            //                         }
            //                     },
            //                     life: {
            //                         count: 1,
            //                         duration: {
            //                             value: {
            //                                 min: 2,
            //                                 max: 2
            //                             }
            //                         }
            //                     },
            //                     move: {
            //                         enable: true,
            //                         gravity: {
            //                             enable: false
            //                         },
            //                         speed: 1.5,
            //                         direction: "none",
            //                         random: true,
            //                         straight: false,
            //                         outMode: "destroy",
            //                         top: "none",
            //                     }
            //                 }
            //             }
            //         },
            //         life: {
            //             count: 0.8
            //         },
            //         shape: {
            //             type: "line"
            //         },
            //         size: {
            //             value: { min: 1, max: 100 },
            //             animation: {
            //                 enable: true,
            //                 sync: true,
            //                 speed: 150,
            //                 startValue: "random",
            //                 destroy: "min"
            //             }
            //         },
            //         stroke: {
            //             color: {
            //                 value: "#303030"
            //             },
            //             width: 1
            //         },
            //         rotate: {
            //             path: true
            //         },
            //         move: {
            //             enable: true,
            //             gravity: {
            //                 acceleration: 25,
            //                 enable: true,
            //                 inverse: true,
            //                 maxSpeed: 100
            //             },
            //             speed: { min: 10, max: 20 },
            //             outModes: {
            //                 default: "destroy",
            //                 top: "none"
            //             },
            //             trail: {
            //                 fillColor: "#000",
            //                 enable: true,
            //                 length: 10
            //             }
            //         }
            //     }
            // }}

            options={
                {
                    preset: "fireworks",
                    sounds: {
                        enable: false,
                    },
                    speed: 2,
                }
            }

            init={particlesInit}
            loaded={particlesLoaded}
            height='100vh'
            width='100vw'
        />
    );
}

export default Fireworks;