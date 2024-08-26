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
      <div className="mx-auto flex max-w-7xl text-center bg-slate-400 p-6 lg:px-8">
        <a>footer</a>
      </div>
    </>
  );
}

export default App;
