import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation";
import Post from "../components/Post";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, createRef } from "react";

export default function Home({ data }) {
  const mainTitle = useRef();
  const mainSubtitle = useRef();
  const workTitle = useRef();
  const workDescription = useRef();
  const projects = useRef();
  const contactTitle = useRef();
  const contactLinks = useRef();
  const contactEmail = useRef();

  // const router = useRouter()
  // const app = gsap.utils.selector(parentRef);
  // const handleClick = (e, href) => {
  //   e.preventDefault();
  //   gsap.to(cursorRef.current, {
  //     width: 0,
  //     height: 0,
  //     opacity: 0,
  //     duration: 0.2,
  //   });
  //   gsap.to(app(".transition-box-main"), {
  //     left: 0,
  //     duration: 0.5,
  //   });
  //   gsap.to(app(".transition-box-off"), {
  //     top: 0,
  //     duration: 0.25,
  //     delay: 0.4,
  //     onComplete: () => {
  //       gsap.set(app(".transition-box-main"), {
  //         left: "-100vw",
  //       });
  //       router.push(href);
  //     },
  //   });
  // };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = new gsap.timeline();
    tl.from(mainTitle.current, {
      opacity: 0,
      y: 85,
      ease: "power3.inOut",
      duration: 1.4,
    });
    tl.from(
      mainSubtitle.current,
      {
        opacity: 0,
        y: 85,
        ease: "power3.inOut",
        duration: 1.4,
      },
      ">-1.3"
    );
    const projectSelector = gsap.utils.selector(projects.current);
    const projectArray = projectSelector(".project-wrapper");
    projectArray.forEach((e, i) => {
      const trigger = i === 0 ? workTitle.current : projectArray[i - 1];
      gsap.from(e, {
        scrollTrigger: {
          trigger: trigger,
          start: "bottom bottom",
        },
        duration: 0.5,
        opacity: 0,
        y: 50,
        ease: "power2.out",
        stagger: {
          each: 0.075,
        },
      });
    });
    gsap.from([workTitle.current, workDescription.current], {
      scrollTrigger: {
        trigger: mainTitle.current,
        start: "top center",
      },
      duration: 0.5,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      stagger: {
        each: 0.075,
      },
    });
    gsap.from(
      [contactTitle.current, contactLinks.current, contactEmail.current],
      {
        scrollTrigger: {
          trigger: contactTitle.current,
          start: "center bottom",
        },
        duration: 0.5,
        opacity: 0,
        y: 40,
        ease: "power2.out",
        stagger: {
          each: 0.075,
        },
      }
    );
  }, []);
  return (
    <div className="container">
      <Head>
        <title>MIQUEAS AGUILAR</title>
        <link rel="icon" hr ef="/favicon.ico" />
        <meta name="description" content="2022 Web Portfolio" />
      </Head>

      <main>
        <header>
          <div className="title-wrap">
            <div className="mainTitleWrap">
              <h2 ref={mainSubtitle} className="main-subtitle title">
                FRONT END DEVELOPER
              </h2>
            </div>
            <div className="mainTitleWrap">
              <h1 ref={mainTitle} className="main-title title">
                MIQUEAS <span>AGUILAR</span>
              </h1>
            </div>
          </div>
        </header>
        <section id="Projects" className="Projects" ref={projects}>
          <div className="projects-intro">
            <h1 ref={workTitle}>WORK</h1>
            <p ref={workDescription}>
              A selection of some of my most recent projects
            </p>
          </div>
          <div className="projects-main">
            {data.map((props, i) => (
              <Post
                name={props.name}
                description={props.description}
                technologies={props.technologies}
                img={props.img}
                id={props.id}
                key={props.id}
              />
            ))}
          </div>
        </section>
        <footer>
          <h1 ref={contactTitle}>CONTACT</h1>
          <div className="contact-wrapper">
            <div className="contact-links" ref={contactLinks}>
              <a href="https://github.com/aguilarmiqueas/" target="_blank">
                GITHUB{" "}
              </a>
              /
              <a
                href="https://www.linkedin.com/in/miqueas-aguilar/"
                target="_blank"
              >
                {" "}
                LINKEDIN{" "}
              </a>
              /<a href="https://twitter.com/mqemq"> TWITTER</a>
            </div>
            <div className="contact-email" ref={contactEmail}>
              <a href="mailto:aguilarmiqueas@gmail.com" target="_blank">
                aguilarmiqueas@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* HEADER */}
      <style jsx>{`
        main {
          background-color: var(--background-color);
          color: var(--main-color);
          font-family: "Neue Montreal Book";
          min-height: 100vh;
        }
        header {
          height: 100vh;
          position: relative;
        }
        .mainTitleWrap {
          overflow: hidden;
          height: 150%;
        }
        .title-wrap {
          position: absolute;
          top: 75%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
        }
        .main-subtitle {
          font-family: "Neue Montreal Book", sans-serif;
          font-weight: normal;
        }
        .main-title {
          font-size: 16vw;
        }
        .main-title span {
          font-size: 17vw;
        }

        @media (min-width: 600px) {
          .title-wrap {
            top: 80%;
          }
          .main-title,
          .main-title span {
            font-size: 8vw;
          }

          .main-subtitle {
            font-size: 6.5vw;
          }
          .title {
            // line-height: 0.6;
            margin: 0;
          }
        }

        @media (min-width: 960px) {
          .title-wrap {
            left: 4vw;
            bottom: 4vw;
            top: initial;
            text-align: left;
            transform: none;
            width: initial;
          }
          .title {
            text-align: left;
          }
          .main-title,
          .main-title span {
            font-size: 5.25vw;
          }
          .main-subtitle {
            font-size: 3.25vw;
          }
        }
      `}</style>

      {/* PROJECTS */}
      <style jsx>
        {`
          .Projects {
            margin: 5vh 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 4vw;
            padding-top: 8vw;
            margin-bottom: 0;
          }
          .projects-main {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .projects-intro h1 {
            font-family: "Neue Montreal Bold", sans-serif;
            font-size: 11vw;
            width: 60%;
          }
          .projects-intro p {
            font-size: 5.5vw;
            width: 60%;
          }

          .projects-intro {
            margin-bottom: 4vw;
            width: 100%;
          }
          .projects-main {
            margin-top: 6vh;
          }

          @media (min-width: 600px) {
            .projects-intro h1 {
              font-size: clamp(1em, 6vw, 60px);
            }
            .projects-intro p {
              font-size: clamp(1em, 3vw, 30px);
            }
          }

          @media (min-width: 960px) {
            .projects-intro {
              padding-left: 10vw;
            }
            .projects-intro h1 {
              font-size: clamp(1em, 4vw, 60px);
            }
            .projects-intro p {
              font-size: clamp(1em, 2vw, 30px);
            }
          }
        `}
      </style>

      {/* FOOTER */}
      <style jsx>
        {`
          footer {
            padding: 4vw;
            padding-bottom: 6vw;
            margin: 8vh 0 4vh;
          }
          footer h1 {
            font-family: "Neue Montreal Bold", sans-serif;
            font-size: 11vw;
          }
          .contact-wrapper {
            font-size: 5.5vw;
          }
          .contact-wrapper a {
            background: rgb(255, 255, 255);
            background: linear-gradient(90deg, #ffffff, #ffffff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: background 150ms ease;
          }

          .contact-wrapper a:hover {
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
          @media (min-width: 600px) {
            footer h1 {
              font-size: 6vw;
            }
            .contact-wrapper {
              font-size: 3vw;
            }
          }

          @media (min-width: 960px) {
            footer {
              padding-left: 10vw;
              margin: 0;
            }
            footer h1 {
              font-size: clamp(1em, 4vw, 60px);
            }
            .contact-wrapper {
              font-size: clamp(1em, 2vw, 30px);
            }
          }
        `}
      </style>
    </div>
  );
}
