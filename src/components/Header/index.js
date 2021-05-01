import React from "react";
import Nav from "../Nav";

function Header(props) {
  return (
    <header className="flex-row px-1" style={{display: "flex", justifyContent: "space-between"}}>
      <h2>
        <a data-testid="link" href="/react-portfolio/" style={{textDecoration: "none"}}>
          Emily Kidd
        </a>
      </h2>
      <Nav
        tabs={props.tabs}
        setCurrentTab={props.setCurrentTab}
        currentTab={props.currentTab}
      />
    </header>
  );
}

export default Header;

// about, contact, footer, header, nav, portfolio, project, resume
// about, contact, portfolio, resume
