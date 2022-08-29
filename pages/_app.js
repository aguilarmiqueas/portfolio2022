import { useEffect, useRef } from "react";
import "../styles/globals.css";
import "../styles/variables.css";

const lerp = (a, b, f) => a + (b - a) * f;
export default function MyApp({ Component, pageProps }) {
  const layout = useRef();
  const content = useRef();
  useEffect(() => {
    layout.current.addEventListener("wheel", (e) => {
      console.log(e);
    });
  }, []);
  return (
    <div className="layout" ref={layout}>
      <div className="content">
        <Component ref={useRef} {...pageProps} />
      </div>
      {/* <style jsx global>{`
        .content {
          position: fixed;
          left: 0;
          right: 0;
          width: 100vw;
          height: 100vh;
          transform: translateY(-0%);
        }
      `}</style> */}
    </div>
  );
}
