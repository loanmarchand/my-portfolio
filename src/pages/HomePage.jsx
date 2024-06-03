import Header from "../components/Header.jsx";
import Home from "../components/Home.jsx";
import Skills from "../components/Skills.jsx";
import Bio from "../components/Bio.jsx";
import Projects from "../components/Projects.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
    return (
        <>
            <Header />
            <Home />
            <Bio />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
}