import HomeMain from "../../components/Home/HomeMain/HomeMain";
import Logos from "../../components/Home/Logos/Logos";
import Hero from "../../components/Home/Hero/Hero";
import Advantages from "../../components/Home/Advantages/Advantages";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Services from "../../components/Home/Services/Services";
import WhyPacenotes from "../../components/Home/WhyPacenotes/WhyPacenotes";
import Help from "../../components/Home/Help/Help";
import AnyQuestions from "../../components/AnyQuestion/AnyQuestions";

const Home = () => {
    return (
        <>
            <HomeMain />
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