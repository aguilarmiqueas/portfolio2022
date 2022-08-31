import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function Navigation({ parentRef, cursorRef }) {
  const about = useRef();
  const work = useRef();
  const router = useRouter();
  const app = gsap.utils.selector(parentRef);
  gsap.defaults({
    ease: "power3.inOut",
  });
  const handleComplete = () => {
    gsap.to(app(".transition-box-off"), {
      top: "-100vh",
      duration: 0.25,
    });
    gsap.from([about.current, work.current], {
      duration: 1,
      ease: "power3.inOut",
      opacity: 0,
      y: 20,
      delay: 0.66,
      stagger: {
        each: 0.1,
      },
    });
  };
  useEffect(() => {
    gsap.from([about.current, work.current], {
      duration: 1,
      ease: "power3.inOut",
      opacity: 0,
      y: 20,
      delay: 0.66,
      stagger: {
        each: 0.1,
      },
    });
    router.events.on("routeChangeComplete", handleComplete);
    return () => {
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    gsap.to(cursorRef.current, {
      width: 0,
      height: 0,
      opacity: 0,
      duration: 0.2,
    });
    gsap.to(app(".transition-box-main"), {
      left: 0,
      duration: 0.5,
    });
    gsap.to(app(".transition-box-off"), {
      top: 0,
      duration: 0.25,
      delay: 0.4,
      onComplete: () => {
        gsap.set(app(".transition-box-main"), {
          left: "-100vw",
        });
        router.push(href);
      },
    });
  };

  const handleWork = (e) => {
    handleClick(e, "/");
  };
  const handleAbout = (e) => {
    handleClick(e, "/about");
  };
  return (
    <nav>
      <Link className="linkWrap" href="/">
        <a className="navigation-link navigation-work" onClick={handleWork}>
          <div ref={work}>WORK</div>
        </a>
      </Link>
      <Link className="linkWrap" href="/about">
        <a className="navigation-link navigation-about" onClick={handleAbout}>
          <div ref={about}>ABOUT</div>
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
          .navigation-link div {
            background: rgb(255, 255, 255);
            background: linear-gradient(90deg, #ffffff, #ffffff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: background 150ms ease;
          }

          .navigation-link:hover div {
            background: linear-gradient(
              117deg,
              #00fdff,
              #0049ff,
              #a9c1fd,
              #e022ff
            );
            background-size: 800% 800%;
            -webkit-background-clip: text;

            -webkit-animation: AnimationName 20s ease infinite;
            -moz-animation: AnimationName 20s ease infinite;
            animation: AnimationName 20s ease infinite;
          }

          @-webkit-keyframes AnimationName {
            0% {
              background-position: 0% 5%;
            }
            50% {
              background-position: 100% 96%;
            }
            100% {
              background-position: 0% 5%;
            }
          }
          @-moz-keyframes AnimationName {
            0% {
              background-position: 0% 5%;
            }
            50% {
              background-position: 100% 96%;
            }
            100% {
              background-position: 0% 5%;
            }
          }
          @keyframes AnimationName {
            0% {
              background-position: 0% 5%;
            }
            50% {
              background-position: 100% 96%;
            }
            100% {
              background-position: 0% 5%;
            }
          }

          .navigation-about {
            right: 6vw;
          }
          .navigation-work {
            left: 6vw;
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
              height: 8vh;
            }
            .navigation-about {
              right: 2.25vw;
            }
            .navigation-work {
              left: 2.25vw;
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
