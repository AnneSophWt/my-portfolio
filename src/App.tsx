
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Intro from "./components/Intro";

function App() {
  return (
      <div className="App bg-gradient-to-r from-purple-200 via-pink-300 to-purple-400 min-h-screen">
        <Intro />
        <Portfolio />
        <Footer />
        <Contact />
      </div>

  );
};

export default App
