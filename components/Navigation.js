import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
export default function Navigation() {
  const about = useRef();
  const work = useRef();
  useEffect(() => {
    gsap.from([about.current, work.current], {
      duration: 2,
      ease: "power3.inOut",
      opacity: 0,
      y: 50,
    });
  }, []);
  return (
    <nav>
      <Link className="linkWrap" href="/about">
        <a className="navigation-link navigation-about">
          <div ref={about}>ABOUT</div>
        </a>
      </Link>
      <Link className="linkWrap" href="/" scroll={false}>
        <a className="navigation-link navigation-work">
          <div ref={work}>WORK</div>
        </a>
      </Link>

      <style jsx>
        {`
          nav {
            position: fixed;
            top: 0;
            width: 100vw;
            background-color: var(--background-color);
            height: 10vh;
            z-index: 1;
            display: flex;
            align-items: center;
          }
          .navigation-link {
            position: absolute;
            font-size: 5vw;
            overflow: hidden;
          }

          .navigation-about {
            left: 6vw;
          }
          .navigation-work {
            right: 6vw;
          }
          .linkWrap {
            overflow: hidden;
          }

          @media (min-width: 600px) {
            .navigation-link {
              font-size: 2vw;
            }
          }

          @media (min-width: 960px) {
            nav {
              height: 6vh;
            }
            .navigation-about {
              left: 2vw;
            }
            .navigation-work {
              right: 2vw;
            }
            .navigation-link {
              font-size: 1.4vw;
            }
          }
        `}
      </style>
    </nav>
  );
}
