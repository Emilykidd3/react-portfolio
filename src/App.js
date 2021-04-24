import React, { useState } from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Header from "./components/Header";
import Resume from"./components/Resume";

function App() {
  const [tabs] = useState([
    { name: "about me" },
    { name: "contact" },
    { name: "portfolio" },
    { name: "resume" },
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={tabs} />
      <main>
        {currentTab.name === "about me" && <About />}
        {currentTab.name === "contact" && <ContactForm />}
        {currentTab.name === "portfolio" && <Portfolio />}
        {currentTab.name === "resume" && <Resume />}
      </main>
    </div>
  );
}

export default App;
