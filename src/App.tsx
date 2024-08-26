import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <div className="mx-auto flex max-w-7xl p-12 lg:px-8">
        <a className="self-center text-center w-full">
          © 2024 Kushal Devkota. All rights reserved
          <br />
          Built with ❤️ in Maryland, US
        </a>
      </div>
    </>
  );
}

export default App;
