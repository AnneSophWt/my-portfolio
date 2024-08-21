
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";


function App() {
  return (
      <div className="App bg-gradient-to-r from-violet-50 via-violet-300 to-violet-700 min-h-screen">
        <Navbar />
        <Intro />
        <Portfolio />
        <Contact />
        <Footer />
      </div>

  );
};

export default App
