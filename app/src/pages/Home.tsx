const reactLogo = (
  <svg
    style={{ width: 100, height: 100, display: "block", margin: "0 auto" }}
    viewBox="0 0 841.9 595.3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <ellipse
        cx="420.9"
        cy="296.5"
        rx="165"
        ry="65"
        stroke="#61dafb"
        strokeWidth="20"
        fill="none"
      />
      <ellipse
        cx="420.9"
        cy="296.5"
        rx="65"
        ry="165"
        stroke="#61dafb"
        strokeWidth="20"
        fill="none"
        transform="rotate(60 420.9 296.5)"
      />
      <ellipse
        cx="420.9"
        cy="296.5"
        rx="65"
        ry="165"
        stroke="#61dafb"
        strokeWidth="20"
        fill="none"
        transform="rotate(120 420.9 296.5)"
      />
      <circle cx="420.9" cy="296.5" r="35" fill="#61dafb" />
    </g>
  </svg>
);

const Home: React.FC = () => {

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#20232a",
      }}
    >
      <div
        style={{
          animation: "spin 20s linear infinite",
          marginBottom: 24,
        }}
      >
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        {reactLogo}
      </div>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 700,
          color: "#61dafb",
          marginBottom: "0.5em",
          letterSpacing: "0.03em",
        }}
      >
        Hello World
      </h1>
      <p
        style={{
          color: "#fff",
          fontSize: "1.15rem",
          opacity: 0.9,
          textAlign: "center",
          maxWidth: 400,
        }}
      >
        Welcome to your modern React app!<br />
        Edit <code>Home.tsx</code> and save to reload.
      </p>
    </div>
  );
};

export default Home;
