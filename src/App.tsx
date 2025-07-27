import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

function App() {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer)

  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-slate-50">
    <Header />
    <main>
      <Hero />
      <About/>
      <Skills/>
      <Projects />
      <Certificates />
    </main>
    <Footer />

    </div>
  )


}

export default App;