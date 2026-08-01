import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import AbrasivLog from "./pages/Abrasivlog";

import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/projects/abrasivlog"
          element={<AbrasivLog />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;