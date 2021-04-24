import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer>
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/emily-kidd-39a8801b8/"
            target="_blank"
          >
              <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Emilykidd3"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="mailto:ekidd61@yahoo.com"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
