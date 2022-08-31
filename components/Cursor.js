import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
const lerp = (a, b, f) => a + (b - a) * f;
export default function Cursor() {
  const router = useRouter();
  const cursorInformation = {
    current: [0, 0],
    target: [0, 0],
    ease: 0.1,
  };
  const cursor = useRef();
  const animateCursor = () => {
    cursorInformation.current[0] = lerp(
      cursorInformation.current[0],
      cursorInformation.target[0],
      cursorInformation.ease
    );
    cursorInformation.current[1] = lerp(
      cursorInformation.current[1],
      cursorInformation.target[1],
      cursorInformation.ease
    );
    cursor.current.style.left = cursorInformation.current[0] + "px";
    cursor.current.style.top = cursorInformation.current[1] + "px";
    requestAnimationFrame(animateCursor);
  };

  useEffect(() => {
    window.addEventListener("pointermove", (e) => {
      cursorInformation.target[0] = e.clientX;
      cursorInformation.target[1] = e.clientY;
    });
    animateCursor();
  }, []);
  return (
    <div className="cursor" ref={cursor}>
      <div className="pointer"></div>

      <style jsx>{`
        .cursor {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 25px;
          height: 25px;
          border-radius: 50%;
          z-index: 9;
          outline: 1px solid white;
          // background-color: white;
          display: none;
          pointer-events: none;
        }
        .pointer {
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: white;
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        @media (min-width: 960px) {
          .cursor {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
