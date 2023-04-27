import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Logos from "../components/Logos/Logos";
import Hero from "../components/Hero/Hero";
import Advantages from "../components/Advantages/Advantages";
import Testimonials from "../components/Testimonials/Testimonials";
import Services from "../components/Services/Services";
import WhyPacenotes from "../components/WhyPacenotes/WhyPacenotes";
import Help from "../components/Help/Help";
import AnyQuestions from "../components/AnyQuestion/AnyQuestions";
import Footer from "../components/Footer/Footer";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import {useState} from "react";

const Home = () => {
    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <>
            <Header burgerActive={burgerActive} setBurgerActive={setBurgerActive}/>
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
            <MobileMenu burgerActive={burgerActive} setBurgerActive={setBurgerActive}/>
        </>
    );
}

export default Home;