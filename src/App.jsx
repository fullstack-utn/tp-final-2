import { useState } from "react";
// styles
import "./App.css";
// components-page
import Header from "./components/Header/Header";
import MyProfile from "./components/MyProfile/MyProfile";
import Works from "./components/Works/Works";
import Experiences from "./components/Experiences/Experiences";
import Offer from "./components/Offer/Offer";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <article>
          <MyProfile />
          <Works />
          <Experiences />
          <Offer />
          <Contact />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
