import Button from "../../components/Button/Button";
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";

const ButtonPage = () => {
    return (
        <div className='button_page_container'>
            <Button title='First_Button' type='primary_button' icon={faLongArrowRight} isReversed={true} callback={() => console.log('test')}/>
            <Button title='Second_Button' type='secondary_button' icon={faLongArrowRight} isReversed={false} callback={() => console.log('test')}/>
            <Button title='Third_Button' icon={faLongArrowRight} isReversed={true} callback={() => console.log('test')}/>
            <Button title='Fourth_Button' isReversed={true} callback={() => console.log('test')}/>
            <Button title='Fifth_Button' callback={() => console.log('test')}/>
            <Button icon={faLongArrowRight} />
            <Button />
        </div>
    );
}

export default ButtonPage;