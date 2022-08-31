import { useEffect, useRef } from "react";
import "../styles/globals.css";
import "../styles/variables.css";
import Bar from "../components/Bar";
import Navigation from "../components/Navigation";
import Cursor from "../components/Cursor";
import gsap from "gsap";
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
        <Component {...pageProps} />
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
