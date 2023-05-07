import Main from "../../components/Main/Main";
import ServicesCardContainer from "../../components/Services/ServicesCardContainer/ServicesCardContainer";
import AnyQuestions from "../../components/AnyQuestion/AnyQuestions";

const Services = () => {
    return (
        <>
            <Main title='Fractional CMO Services' description='Delegate your marketing outcomes to an expert to take your time back and see a greater return on your marketing budget.' />
            <ServicesCardContainer />
            <AnyQuestions />
        </>
    );
};

export default Services;