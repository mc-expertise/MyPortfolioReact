import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
// import DarkMode from "./components/DarkMode/DarkMode";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Qualification from "./components/Qualification/Qualification";
import Scrollup from "./components/Scrollup/Scrollup";
// import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
// import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Qualification />
        {/* <Testimonials /> */}
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
