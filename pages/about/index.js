import Navigation from "../../components/Navigation";

export default function About() {
  return (
    <div className="About">
      <Navigation />
      <div className="about-wrapper">
        <div className="about-main">
          <h1 className="title"> ABOUT ME</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A id,
            incidunt omnis doloremque aperiam impedit labore eaque dolores
            voluptas dicta. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Eos nulla excepturi vel, nobis explicabo dolore hic
            exercitationem doloremque voluptates inventore?
          </p>
        </div>
        <div className="about-subwrapper about-tech">
          <h2 className="title">Technologies</h2>
          <p>JAVASCRIPT / REACT / NEXT / THREE / GSAP</p>
        </div>
        <div className="about-subwrapper about-contact">
          <h2 className="title">Contact</h2>
          <p className="about-contact-links">GITHUB / LINKEDIN / TWITTER</p>
          <p className="about-contact-email">aguilarmiqueas@gmail.com</p>
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
          .about-main .title {
            font-size: 4vw;
          }
          .about-subwrapper .title {
            font-size: 4vw;
          }
          .about-wrapper p,
          .about-subwrapper p {
            font-size: 2vw;
            max-width: 66%;
          }
        }
      `}</style>
    </div>
  );
}
