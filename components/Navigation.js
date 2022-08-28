import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/about">
        <a className="navigation-link navigation-about">ABOUT</a>
      </Link>
      <Link href="/" scroll={false}>
        <a className="navigation-link navigation-work">WORK</a>
      </Link>

      <style jsx>
        {`
          nav {
            position: fixed;
            top: 0;
            width: 100vw;
            background-color: var(--background-color);
            height: 10vh;
            z-index: 1;
          }
          .navigation-link {
            position: absolute;
            top: 3.2vh;
            font-size: 5vw;
          }

          .navigation-about {
            left: 6vw;
          }
          .navigation-work {
            right: 6vw;
          }

          @media (min-width: 600px) {
            .navigation-link {
              font-size: 2vw;
            }
          }

          @media (min-width: 960px) {
            nav {
              height: 6vh;
            }
            .navigation-about {
              left: 2vw;
            }
            .navigation-work {
              right: 2vw;
            }
            .navigation-link {
              top: 2vh;
              font-size: 1.4vw;
            }
          }
        `}
      </style>
    </nav>
  );
}
