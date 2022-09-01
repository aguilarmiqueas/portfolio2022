import { useEffect, useRef } from "react";
import Navigation from "../../components/Navigation";
import gsap from "gsap";
export default function About() {
  const aboutMeTitle = useRef();
  const aboutMeDescription = useRef();
  const technologiesTitle = useRef();
  const technologiesDescription = useRef();
  const contactTitle = useRef();
  const contactDescription = useRef();
  const contactEmail = useRef();

  useEffect(() => {
    const tl = new gsap.timeline();
    tl.from(
      [
        aboutMeTitle.current,
        aboutMeDescription.current,
        technologiesTitle.current,
        technologiesDescription.current,
        contactTitle.current,
        contactDescription.current,
        contactEmail.current,
      ],
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.out",
        stagger: {
          each: 0.075,
        },
      }
    );
  }, []);
  return (
    <div className="About">
      <div className="about-wrapper">
        <div className="about-main">
          <h1 ref={aboutMeTitle} className="title">
            {" "}
            ABOUT ME
          </h1>
          <p ref={aboutMeDescription}>
            Hi! I'm a creative / front end developer based in Argentina. Looking
            to build fun stuff and learn new things. Currently available for
            work.
          </p>
        </div>
        <div className="about-subwrapper about-tech">
          <h2 ref={technologiesTitle} className="title">
            Technologies
          </h2>
          <p ref={technologiesDescription}>
            Javascript / React / Next / Three / GSAP
          </p>
        </div>
        <div className="about-subwrapper about-contact">
          <h2 className="title" ref={contactTitle}>
            Contact
          </h2>
          <p ref={contactDescription} className="about-contact-links">
            <a href="https://github.com/aguilarmiqueas/">GITHUB </a>/
            <a href="https://www.linkedin.com/in/miqueas-aguilar/">
              {" "}
              LINKEDIN{" "}
            </a>
            /<a href="https://twitter.com/mqemq"> TWITTER</a>
          </p>
          <p ref={contactEmail} className="about-contact-email">
            <a href="mailto:aguilarmiqueas@gmail.com">
              aguilarmiqueas@gmail.com
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .About {
          font-family: "Neue Montreal Book";
          font-weight: normal;
          padding-top: 15vh;
          padding-bottom: 15vh;
          min-height: calc(100vh - 12px);
        }
        .about-wrapper {
          padding: 4vw;

          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
        }
        .title {
          text-align: left;
          text-transform: uppercase;
          margin-bottom: 1vw;
        }
        .about-main .title {
          font-size: 11vw;
        }
        .about-main p {
          font-size: 5.5vw;
        }

        .about-subwrapper {
          margin-top: 11vw;
        }

        .about-subwrapper .title {
          font-size: 7.5vw;
        }

        .about-subwrapper p {
          font-size: 5.5vw;
        }

        .about-contact a {
          background: rgb(255, 255, 255);
          background: linear-gradient(90deg, #ffffff, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: background 150ms ease;
        }

        .about-contact a:hover {
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
          .about-wrapper {
            padding: 0 8vw;
          }
          .about-subwrapper {
            margin-top: 6vw;
          }
          .title {
            margin-bottom: 0.8vw;
          }
          .about-main .title {
            font-size: 6vw;
          }
          .about-subwrapper .title {
            font-size: 6vw;
          }
          .about-wrapper p,
          .about-subwrapper p {
            font-size: 3vw;
            max-width: 66%;
          }
        }

        @media (min-width: 960px) {
          .About {
            padding-top: calc(25vh - 12px);
          }
          .about-wrapper {
            padding-left: 14vw;
          }
          .about-main .title {
            font-size: clamp(1em, 4vw, 60px);
          }
          .about-subwrapper .title {
            font-size: clamp(1em, 4vw, 50px);
          }
          .about-wrapper p,
          .about-subwrapper p {
            font-size: clamp(1em, 2vw, 30px);
            max-width: 66%;
          }
        }
      `}</style>
    </div>
  );
}
