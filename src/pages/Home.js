import Main from "../components/Main/Main";
import Logos from "../components/Logos/Logos";
import Hero from "../components/Hero/Hero";
import Advantages from "../components/Advantages/Advantages";
import Testimonials from "../components/Testimonials/Testimonials";
import Services from "../components/Services/Services";
import WhyPacenotes from "../components/WhyPacenotes/WhyPacenotes";
import Help from "../components/Help/Help";
import AnyQuestions from "../components/AnyQuestion/AnyQuestions";

const Home = () => {
    return (
        <>
            <Main />
            <Logos />
            <Hero />
            <Advantages />
            <Testimonials />
            <Services />
            <WhyPacenotes />
            <Help />
            <AnyQuestions />
        </>
    );
}

export default Home;