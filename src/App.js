import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Porto" />

        <footer>
          Built by{" "}
          <a
            className="Footer-link"
            href="https://relaxed-puppy-1f4f1f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            label="Personal Website"
          >
            Gabriela Canelas
          </a>{" "}
          using React and is{" "}
          <a
            className="Footer-link"
            href="https://github.com/gabrielapcan/weather-react-shecodes"
            target="_blank"
            rel="noopener noreferrer"
            label="GitHub repository"
          >
            open-sourced
          </a>{" "}
          on GitHub.
          <p className="social-links">
            <a
              className="Footer-link"
              href="https://github.com/gabrielapcan/"
              target="_blank"
              rel="noopener noreferrer"
              label="GitHub"
            >
              <i className="fa-brands fa-github-alt"></i>
            </a>
            <a
              className="Footer-link"
              href="https://www.linkedin.com/in/gabrielacanelas"
              target="_blank"
              rel="noopener noreferrer"
              label="LinkedIn profile"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              className="Footer-link"
              href="https://www.instagram.com/gabrielapcan/"
              target="_blank"
              rel="noopener noreferrer"
              label="Instagram profile"
            >
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
