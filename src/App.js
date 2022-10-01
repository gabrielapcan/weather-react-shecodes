import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

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
            open-sourced
          </a>{" "}
          on GitHub.
        </footer>
      </div>
    </div>
  );
}
