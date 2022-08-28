import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navigation from "../../../components/Navigation";
export default function Post() {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const post = data.filter((e) => e.id == router.query.slug);
        setData(post[0]);
      });
  }, []);

  if (!data) return <div>Something went wrong.</div>;
  return (
    <article className="Project">
      <Navigation />
      <header></header>
      <div className="description">
        <h1>{data.name}</h1>
        <h2>{data.description}</h2>
        <h3>{data.technologies}</h3>
      </div>
      <div className="content">{data.content}</div>

      <style jsx global>
        {`
          nav {
            background: none !important;
          }
          header {
            height: 100vh;
            background-image: url(${data.img});
            background-position: center;
            background-size: cover;
            position: relative;
            filter: grayscale(10%) brightness(100%);
          }

          .description {
            padding: 4vw;
            margin: 4vh 0;
          }
          .description h1 {
            font-size: 11vw;
          }
          .description h2,
          .description h3 {
            font-size: 5.5vw;
          }
        `}
      </style>
    </article>
  );
}
