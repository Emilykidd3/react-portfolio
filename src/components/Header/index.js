import React from "react";
import Nav from '../Nav'

function Header(props) {
  return (
    <header>
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