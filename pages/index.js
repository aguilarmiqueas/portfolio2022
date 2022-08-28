import Head from "next/head";
import Navigation from "../components/Navigation";
import Post from "../components/Post";

export default function Home({ posts }) {
  const data = [
    {
      name: "CAR GAME",
      description: "FOLLOW THE LINE",
      technologies: "REACT THREE FIBER / ZUSTAND",
      img: "/images/hoc-thumbnail.png",
      id: 1,
    },
    {
      name: "HOUSE OF CARDS",
      description: "A RADIOHEAD HOMAGE",
      technologies: "VANILLA THREE",
      img: "/images/hoc-thumbnail.png",

      id: 2,
    },
    {
      name: "PORTFOLIO",
      description: "UPDATED 2022",
      technologies: "NEXT / REACT THREE FIBER / GSAP",
      img: "/images/hoc-thumbnail.png",

      id: 3,
    },
  ];
  return (
    <div className="container">
      <Head>
        <title>MIQUEAS AGUILAR</title>
        <link rel="icon" hr ef="/favicon.ico" />
        <meta name="description" content="2022 Web Portfolio" />
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
            <p>A selection of some of my most recent projects</p>
          </div>
          <div className="projects-main">
            {data.map((props) => (
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
          <h1>CONTACT</h1>
          <div className="contact-wrapper">
            <div className="contact-links">
              <a href="https://github.com/aguilarmiqueas/">GITHUB </a>/
              <a href="https://www.linkedin.com/in/miqueas-aguilar/">
                {" "}
                LINKEDIN{" "}
              </a>
              /<a href="https://twitter.com/mqemq"> TWITTER</a>
            </div>
            <div className="contact-email">
              <a href="mailto:aguilarmiqueas@gmail.com">
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
            margin: 15vh 0;
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
            footer {
              padding-left: 10vw;
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
