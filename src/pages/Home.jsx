import Hero from "../components/Hero";
import About from "../components/AboutMe";
import CV from "../components/Cv";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Projects, Skills, Experience, Contact will go below */}
      <About />
      <CV />
    </>
  );
}
