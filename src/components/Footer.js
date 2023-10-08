import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <footer className="footer-container">
      <a
        className="githublink"
        href="https://github.com/Youngobz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </a>
      <a
        className="linkedinlink"
        href="https://www.linkedin.com/in/mohammed-m-rahman-234048140" // @TODO: Add linkedin link
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
      </a>
      <a
        className="githublink"
        // href="" // @TODO: add stackover flow account
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="icon" icon={faStackOverflow} size="2x" />
      </a>
    </footer>
  );
}

export default Footer;
