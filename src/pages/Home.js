import Header from "../components/Header";
import Main from "../components/Main";
import Logos from "../components/Logos";
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import WhyPacenotes from "../components/WhyPacenotes";
import Help from "../components/Help";
import AnyQuestions from "../components/AnyQuestions";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <Logos />
            <Hero />
            <Advantages />
            <Testimonials />
            <Services />
            <WhyPacenotes />
            <Help />
            <AnyQuestions />
            <Footer />
        </>
    );
}

export default Home;