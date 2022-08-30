import { useRef } from "react";
import "../styles/globals.css";
import "../styles/variables.css";
import Bar from "../components/Bar";
import Navigation from "../components/Navigation";
const lerp = (a, b, f) => a + (b - a) * f;
export default function MyApp({ Component, pageProps }) {
  const layout = useRef();
  const component = useRef();
  return (
    <div className="layout" ref={layout}>
      <div className="content" ref={component}>
        <Navigation />
        <Component {...pageProps} />
        <Bar />
      </div>
      <style jsx global>{``}</style>
    </div>
  );
}
