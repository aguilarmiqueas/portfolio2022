import "../styles/globals.css";
import "../styles/variables.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <Component {...pageProps} />
    </div>
  );
}
