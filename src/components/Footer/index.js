import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer>
      <ul className="icons" style={{display: "flex", justifyContent: "center"}}>
        <li>
          <a
            href="https://www.linkedin.com/in/emily-kidd-39a8801b8/"
            target="_blank"
            rel="noreferrer"
          >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </li>
        <li style={{marginLeft: "15px"}}>
          <a
            href="https://github.com/Emilykidd3"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </li>
        <li style={{marginLeft: "15px"}}>
          <a
            href="mailto:ekidd61@yahoo.com"
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
