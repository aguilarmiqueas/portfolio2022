import Navigation from "../../components/Navigation";

export default function About() {
  return (
    <div className="About">
      <Navigation />
      <div className="about-wrapper">
        <div className="about-main">
          <h1 className="title"> ABOUT ME</h1>
          <p>
            Hi! I'm a creative / front end developer based in Argentina. Looking
            to build fun stuff and learn new things. Currently available for
            work.
          </p>
        </div>
        <div className="about-subwrapper about-tech">
          <h2 className="title">Technologies</h2>
          <p>Javascript / React / Next / Three / GSAP</p>
        </div>
        <div className="about-subwrapper about-contact">
          <h2 className="title">Contact</h2>
          <p className="about-contact-links">
            <a href="https://github.com/aguilarmiqueas/">GITHUB </a>/
            <a href="https://www.linkedin.com/in/miqueas-aguilar/">
              {" "}
              LINKEDIN{" "}
            </a>
            /<a href="https://twitter.com/mqemq"> TWITTER</a>
          </p>
          <p className="about-contact-email">
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
          margin-top: 15vh;
          padding-bottom: 15vh;
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
          margin-bottom: 4vw;
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
            margin-top: 25vh;
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