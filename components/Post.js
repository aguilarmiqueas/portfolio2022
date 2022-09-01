import Link from "next/link";
import Image from "next/image";
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
          <div className="next-img-wrapper">
            <Image
              src={img}
              alt=""
              layout="fill"
              objectFit="cover"
              className="project-img"
            />
          </div>
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
              // width: min(72vw, 1400px);
              width: 100%;
              max-width: 1400px;
            }
            .project-wrapper * {
              cursor: pointer;
            }
            .project-wrapper:hover .project-img {
              filter: grayscale(0%);
            }
            .project-img-wrapper {
              height: min(calc(1400px / 1.77), calc(72vw / 1.77));
              width: 100%;
              background-color: #eeeeee;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }

            .project-img-wrapper:after {
              position: absolute;
              bottom: 0;
              content: "";
              height: 2px;
              width: 100%;
              background: rgb(90, 90, 255);
              background: linear-gradient(
                90deg,
                rgba(90, 90, 255, 1) 0%,
                rgba(63, 253, 255, 1) 33%,
                rgba(154, 113, 230, 1) 66%,
                rgba(249, 115, 249, 1) 100%
              );
              z-index: 4;
              transition: all 150ms ease;
            }

            .project-wrapper:hover .project-img-wrapper:after {
              height: 8px;
            }

            .next-img-wrapper {
              position: relative;
              width: 100%;
              height: 100%;
              transition: all 250ms ease;
            }
            .project-wrapper:hover .next-img-wrapper {
              filter: grayscale(0);
            }

            .project-img {
              object-fit: cover;
              transition: filter 300ms;
              position: relative;
            }

            .project-info {
              display: flex;
              width: 100%;
              justify-content: space-between;
              align-items: baseline;
              margin-top: 2vw;
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
              .project-title {
                font-size: 4vw;
              }
              .project-description {
                font-size: 3vw;
              }
              .project-info-right p {
                font-size: 2.2vw;
              }
            }
            @media (min-width: 960px) {
              .projects-intro {
                padding-left: 10vw;
              }
              .project-wrapper {
                margin-bottom: 8vw;
                width: min(72vw, 1400px);
              }
              .next-img-wrapper {
                filter: grayscale(0.5);
              }

              .project-wrapper:hover .next-img-wrapper {
                filter: grayscale(0);
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
