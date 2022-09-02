export default function Bar() {
  return (
    <div className="bar">
      <style jsx>{`
        .bar {
          position: fixed;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: rgb(90, 90, 255);
          background: linear-gradient(
            90deg,
            rgba(90, 90, 255, 1) 0%,
            rgba(63, 253, 255, 1) 33%,
            rgba(154, 113, 230, 1) 66%,
            rgba(249, 115, 249, 1) 100%
          );
        }
      `}</style>
    </div>
  );
}
