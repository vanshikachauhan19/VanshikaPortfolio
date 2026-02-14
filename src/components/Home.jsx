import About from './About';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
        </main>
    );
};

export default Home;
