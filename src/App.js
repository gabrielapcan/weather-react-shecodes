import "./App.css";

export default function App() {
  return (
    <div className="Weather-app">
      <h1>Weather App</h1>
      <footer>
        This page was built by{" "}
        <a
          className="Footer-link"
          href="https://www.linkedin.com/in/gabrielacanelas"
          target="_blank"
          rel="noopener noreferrer"
          label="LinkedIn profile"
        >
          Gabriela Canelas
        </a>{" "}
        and is{" "}
        <a
          className="Footer-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          label="GitHub repository"
        >
          open-sourced.
        </a>
      </footer>
    </div>
  );
}
