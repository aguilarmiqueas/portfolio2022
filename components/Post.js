import Link from "next/link";
export default function Post({
  name,
  description,
  technologies,
  img = null,
  id,
}) {
  return (
    <Link href={`/project/${id}`}>
      <div className="project-wrapper">
        <div className="project-img-wrapper">
          <img src={img} alt="" />
        </div>
        <div className="project-info">
          <div className="project-info-left">
            <p className="project-description">{description}</p>
            <h2 className="project-title">{name}</h2>
          </div>
          <div className="project-info-right">
            <p>{technologies}</p>
          </div>
        </div>
        <style jsx>
          {`
            .project-wrapper {
              display: flex;
              flex-direction: column;
              margin-top: 4vh;
              cursor: pointer;
            }
            .project-wrapper * {
              cursor: pointer;
            }
            .project-wrapper:hover .project-img-wrapper img {
              // filter: grayscale(100%);
              background-color: green;
            }
            .project-img-wrapper {
              height: 50vh;
              width: 100%;
              background-color: #eeeeee;
            }

            .project-img-wrapper img {
              object-fit: cover;
              width: 100%;
              height: 100%;
              filter: grayscale(60%);
              transition: filter 150ms;
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
              .projects-intro {
                padding-left: 10vw;
              }
              .project-wrapper {
                margin-bottom: 8vw;
              }
              .project-img-wrapper {
                height: 85vh;
              }
              .project-info {
                margin-top: 0vw;
              }
              .project-title {
                font-size: clamp(0.1em, 2.5vw, 36px);
              }
              .project-description {
                font-size: clamp(0.1em, 1.5vw, 22px);
              }
              .project-info-right p {
                font-size: clamp(0.1em, 1.5vw, 22px);
              }
            }
          `}
        </style>
      </div>
    </Link>
  );
}
