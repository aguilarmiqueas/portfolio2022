import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Navigation from "../../../components/Navigation";
import Image from "next/image";
export default function Post({ data }) {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const router = useRouter();
  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const post = res.filter((e) => e.id == router.query.slug);
  //       console.log(post[0].content[0]);
  //       setData(post[0]);
  //       setLoading(false);
  //     });
  // }, [loading]);
  // if (loading) return <div>Loading</div>;
  // if (!data) return <div>Something went wrong.</div>;
  let post = {
    name: null,
    url: null,
    description: null,
    technologies: null,
    images: [,],
    content: [],
    img: null,
  };
  post = data.filter((e) => e.id == router.query.slug)[0];

  return (
    <article className="Project">
      <header>
        {post?.url ? (
          <a href={post?.url}>VISIT WEBSITE</a>
        ) : (
          <div className="linkNotAvailable">LINK NOT AVAILABLE</div>
        )}
      </header>
      <div className="description">
        <h1>{post?.name}</h1>
        <h2>{post?.description}</h2>
        <h3>{post?.technologies}</h3>
      </div>
      <div className="content">
        {post?.content.map((e) => (
          <p>{e}</p>
        ))}
        <div className="images-wrapper">
          {post?.images.map((e) => (
            <div className="next-wrapper">
              <Image src={e} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </div>
      <style jsx global>
        {`
          .Project {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            position: relative;
          }

          .Project .content {
            padding-bottom: 4vh;
          }

          .images-wrapper {
            position: relative;
            width: 100%;
          }

          .next-wrapper {
            position: relative;
            height: calc(96vw / 1.77);
            margin: 4vw;
          }

          .content p {
            padding: 4vw;
            font-size: 5.5vw;
          }

          nav {
            background: none !important;
            color: white !important;
          }

          header {
            height: calc(100vw / 1.77);
            width: 100%;
            background-image: url(${post?.img.desktop});
            background-position: center;
            background-size: cover;
            position: relative;
            filter: grayscale(10%) brightness(100%);
          }

          header a,
          header .linkNotAvailable {
            font-size: 5vw;
            position: absolute;
            font-weight: normal;
            bottom: 2.25vw;
            right: 2.25vw;
            background: rgb(255, 255, 255);
            background: linear-gradient(90deg, #ffffff, #ffffff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: background 150ms ease;
          }

          header a:hover {
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

          .description {
            padding: 4vw;
            padding-bottom: 2vw;
            margin: 4vh 0;
          }
          .description h1 {
            font-size: 11vw;
            font-family: "Neue Montreal Bold", sans-serif;
          }
          .description h2,
          .description h3 {
            font-size: 5.5vw;
          }

          @media (min-width: 600px) {
            header {
              background-image: url(${post?.img.desktop});
            }
            .description {
              width: 100%;
            }
            .description h1 {
              font-size: clamp(1em, 4vw, 60px);
            }
            .description h2,
            .description h3 {
              font-size: clamp(1em, 2vw, 30px);
            }
            .content p {
              font-size: clamp(1em, 1.6vw, 30px);
            }
            header a,
            header .linkNotAvailable {
              font-size: 2vw;
            }
          }

          @media (min-width: 960px) {
            .next-wrapper {
              width: min(74vw, 1400px);
              height: 40vw;
              margin-left: 0;
            }
            .Projects {
              align-items: center;
            }

            .images-wrapper {
              margin-top: 4vw;
            }

            .Project .content {
              width: 100%;
              padding-left: 14vw;
            }
            .description {
              padding-left: 14vw;
            }
            .content p {
              max-width: 50vw;
              padding: 0.5vw;
              padding-left: 0vw;
            }
            header {
              height: calc(85vw / 1.77);
            }
            header a,
            header .linkNotAvailable {
              font-size: 1.4vw;
            }
          }
        `}
      </style>
    </article>
  );
}
