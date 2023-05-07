import Button from "../../components/ui-kit/Button/Button";
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";

const ButtonPage = () => {
    return (
        <div className='button_page_container'>
            <Button title='First_Button' type='primary_button' icon={faLongArrowRight} iconSize='xl' isReversed={true} callback={() => console.log('test')} link='/' />
            <Button title='Second_Button' type='secondary_button' icon={faLongArrowRight} iconSize='xl' isReversed={false} callback={() => console.log('test')} link='/' />
            <Button title='Third_Button' icon={faLongArrowRight} iconSize='xl' isReversed={true} callback={() => console.log('test')} link='/' />
            <Button title='Fourth_Button' isReversed={true} callback={() => console.log('test')} link='/' />
            <Button title='Fifth_Button' callback={() => console.log('test')} link='/' />
            <Button icon={faLongArrowRight} iconSize='xl' link='/' />
            <Button link='/' />
            <Button />
        </div>
    );
}

export default ButtonPage;