import { useEffect, useRef } from "react";
import "../styles/globals.css";
import "../styles/variables.css";
import Bar from "../components/Bar";
import Navigation from "../components/Navigation";
import Cursor from "../components/Cursor";
import gsap from "gsap";
const data = [
  {
    name: "HOUSE OF CARDS",
    description: "A RADIOHEAD HOMAGE",
    technologies: "VANILLA THREE",
    img: { desktop: "/images/hoc-bg.png", mobile: "/images/hoc-bg.png" },
    url: "https://house-of-cards.vercel.app/",
    content: [
      "An audio-visual experience, built utilizing point cloud data from Radiohead's House of Cards music video, and Three.js.",
      "This experience utilizes a mix of built-in and custom post-processing effects, and custom shaders for the audio-reactive effect.",
      "GSAP was used for the animations and camera movement.",
    ],
    images: [
      "/images/hob1.png",
      "/images/hob2.jpg",
      "/images/hob3.jpg",
      "/images/hob4.png",
    ],
    id: 2,
  },
  {
    name: "CAR GAME",
    description: "FOLLOW THE LINE",
    technologies: "REACT THREE FIBER / ZUSTAND",
    img: { desktop: "/images/car-bg.png", mobile: "/images/car-m-1.png" },
    id: 1,
    url: "https://car-game.vercel.app/",
    content: [
      "A small car game built with React Three Fiber, in which the objective is to stay on top of the purple line for as long as possible. The controls are WASD for movement, Space Bar for drifting and Shift for nitro boosting.",
      "This game utilizes custom shaders for some of the post-processing effects and the ground distortion, using the car's velocity and position as input.",
      "Zustand is being used as a global store to share state for certain elements of the game, like the car's position and velocity.",
      "The 3D model of the car was made by '4d_Bob' on Sketchfab, and the textures for the ground plane and scattered spheres were taken from Polyhaven. Screen-space reflections are implemented as a post-processing filter utilizing @0beqz's SSR component.",
    ],
    images: [
      "/images/car.jpeg",
      "/images/car1.jpg",
      "/images/car3.jpg",
      "/images/car4.png",
      "/images/car5.jpg",
    ],
  },
  {
    name: "PORTFOLIO",
    description: "UPDATED 2022",
    technologies: "NEXT / GSAP",
    url: null,
    img: { desktop: "/images/folio.png", mobile: "/images/folio.png" },
    content: [
      "This portfolio was built with Next.js. GSAP does the heavy lifting for most animations and transitions, with regular CSS animations being used for some of the minor microinteractions like hover states.",
      "The animated cursor is a simple div whose position is being linearly interpolated to the position of the actual cursor every frame (using requestAnimationFrame).",
    ],
    images: [],
    id: 3,
  },
  {
    name: "FREELANCE WORK",
    description: "A COMPILATION OF PREVIOUS WORKS",
    technologies: "VUE / NUXT",
    url: null,
    id: 4,
    img: { desktop: "/images/patriz.png" },
    content: [
      "This is an anthology of my past freelance works.",
      "Some of these websites are simple landing pages built with the vanilla stack (HTML, CSS, JavaScript), others are more involved web apps like blogs and required Vue, Nuxt and WordPress (as the Headless API, using Advanced Custom Fields)",
      "I worked closely with a UI designer for most of these.",
    ],
    images: [
      "/images/vistalago.png",
      "/images/patriz.png",

      "/images/norw1.jpg",
      "/images/norw2.png",
      "/images/norw3.jpg",
      "/images/norw4.png",
      "/images/img.png",

      "/images/biamaq.png",
      "/images/bucpy.png",
    ],
  },
];
export default function MyApp({ Component, pageProps }) {
  const layout = useRef();
  const component = useRef();
  const cursor = useRef();
  const transitionBoxMain = useRef();
  const transitionBoxOff = useRef();
  useEffect(() => {
    gsap.to([transitionBoxOff.current], {
      top: "100vh",
      duration: 0.25,
    });
  });
  return (
    <div className="layout" ref={layout}>
      <Cursor />

      <div className="content" ref={component}>
        <Navigation parentRef={component} cursorRef={cursor} />
        <Component {...pageProps} data={data} parentRef={component} />
        <Bar />
        <div
          className="transition-box transition-box-main"
          ref={transitionBoxMain}
        ></div>
        <div
          className="transition-box transition-box-off"
          ref={transitionBoxOff}
        ></div>
      </div>
      <style jsx global>{`
        .transition-box {
          position: fixed;
          z-index: 10;
          width: 100vw;
          height: 100vh;
        }
        .transition-box-main {
          left: -100vw;
          // left: 0;
          top: 0;
          background-color: var(--main-color);
        }

        .transition-box-off {
          left: 0;
          top: 100vh;
          top: 0;
          background-color: var(--background-color);
          // background-color: #151515;
        }
      `}</style>
    </div>
  );
}
