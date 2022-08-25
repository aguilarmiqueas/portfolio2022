import Head from "next/head";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MIQUEAS AGUILAR</title>
        <link rel="icon" hr ef="/favicon.ico" />
      </Head>

      <main>
        <header>
          <Navigation />

          <div className="title-wrap">
            <h1 className="main-title title">MIQUEAS AGUILAR</h1>
            <h2 className="main-subtitle title">FRONT END DEVELOPER</h2>
          </div>
        </header>
        <section className="Projects">
          <div className="projects-intro">
            <h1>WORK</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis eligendi consectetur cumque, sint praesentium quos a
              unde earum maxime pariatur.
            </p>
          </div>
          <div className="projects-main">
            <div className="project-wrapper">
              <div className="project-img-wrapper">
                <img src="" alt="" />
              </div>
              <div className="project-info">
                <div className="project-info-left">
                  <p className="project-description">A RADIOHEAD HOMAGE</p>

                  <h2 className="project-title">HOUSE OF CARDS</h2>
                </div>
                <div className="project-info-right">
                  <p>VANILLA THREE</p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <div className="project-img-wrapper">
                <img src="" alt="" />
              </div>
              <div className="project-info">
                <div className="project-info-left">
                  <p className="project-description">FOLLOW THE LINE</p>

                  <h2 className="project-title">CAR GAME</h2>
                </div>
                <div className="project-info-right">
                  <p>REACT / REACT THREE FIBER</p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <div className="project-img-wrapper">
                <img src="" alt="" />
              </div>
              <div className="project-info">
                <div className="project-info-left">
                  <p className="project-description">UPDATED 2022 PORTFOLIO</p>

                  <h2 className="project-title">PORTFOLIO</h2>
                </div>
                <div className="project-info-right">
                  <p>REACT / REACT THREE FIBER / GSAP</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <h1>CONTACT</h1>
          <div className="contact-wrapper">
            <div className="contact-links">GITHUB / LINKEDIN / TWITTER</div>
            <a className="contact-email">aguilarmiqueas@gmail.com</a>
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

        .title-wrap {
          position: absolute;
          top: 75%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
        }

        @media (min-width: 600px) {
          .title-wrap {
            top: 80%;
          }
          .main-title {
            font-size: 6.25vw;
          }
          .main-subtitle {
            font-size: 6vw;
          }
          .title {
            line-height: 0.6;
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
          .main-title {
            font-size: 5.25vw;
          }
          .main-subtitle {
            font-size: 5vw;
          }
        }
      `}</style>

      {/* PROJECTS */}
      <style jsx>
        {`
          .Projects {
            margin: 8vh 0;
            display: flex;
            flex-direction: column;
            padding: 4vw;
            margin-bottom: 0;
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
          }
          .projects-main {
            margin-top: 6vh;
          }
          .project-wrapper {
            display: flex;
            flex-direction: column;
            margin-top: 4vh;
          }
          .project-img-wrapper {
            height: 30vh;
            width: 100%;
            background-color: #eeeeee;
          }
          .project-info {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: baseline;
            margin-top: 2vw;
            max-width: 1400px;
            align-self: center;
          }

          .project-info-right {
            height: 100%;
          }

          .project-title {
            font-size: 5.5vw;
            font-family: "Neue Montreal Bold", sans-serif;
          }
          .project-description {
            font-size: 3.5vw;
          }
          .project-info-right {
            text-align: right;
          }
          .project-info-right p {
            font-size: 3.5vw;
            margin-top: 2vw;
          }

          @media (min-width: 600px) {
            .projects-intro h1 {
              font-size: 6vw;
            }
            .projects-intro p {
              font-size: 3vw;
            }

            .project-wrapper {
              margin-bottom: 4vw;
            }

            .project-img-wrapper {
              height: 40vh;
            }

            .project-title {
              font-size: 4vw;
            }
            .project-description {
              font-size: 3vw;
            }
            .project-info-right p {
              font-size: 3vw;
            }
          }

          @media (min-width: 960px) {
            .project-wrapper {
              margin-bottom: 8vw;
            }
            .projects-intro h1 {
              font-size: 4vw;
            }
            .projects-intro p {
              font-size: 2vw;
            }
            .project-img-wrapper {
              height: 75vh;
            }
            .project-info {
              margin-top: 1vw;
            }
            .project-title {
              font-size: 2.5vw;
            }
            .project-description {
              font-size: 1.5vw;
            }
            .project-info-right p {
              font-size: 1.5vw;
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
          }
          footer h1 {
            font-family: "Neue Montreal Bold", sans-serif;
            font-size: 11vw;
          }
          .contact-wrapper {
            font-size: 5.5vw;
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
            footer h1 {
              font-size: 4vw;
            }
            .contact-wrapper {
              font-size: 2vw;
            }
          }
        `}
      </style>
    </div>
  );
}
