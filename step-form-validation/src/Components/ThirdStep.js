import React, {Component} from 'react'
import './Styles/Styles.css'
export class ThirdStep extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = (e) => {
        const consentInput = document.getElementById('consent-input');
        const consentInputErrorMessage = document.getElementById('consentInputErrorMessage');

        if (consentInput.checked != true) {
            consentInput.style.boxShadow = '0px 0px 15px 0px red';
            consentInputErrorMessage.innerHTML = 'Подтвердите поле';
        }


        else {
            e.preventDefault();
            this.props.nextStep();
        }


    };



    render() {

        const {values, handleChange} = this.props;

        const errorReset = () => {
            const consentInput = document.getElementById('consent-input');
            const consentInputErrorMessage = document.getElementById('consentInputErrorMessage');

            if (consentInput.checked === true) {
                consentInput.style.boxShadow = '';
                consentInputErrorMessage.style.display = 'none'
            }
        }
        return (
            <div className='step-details'>
                <div className='step-container' onChange={errorReset}>
                    <button
                        className='btn-back'
                        onClick={this.back}>
                        Назад
                    </button>
                    <div className='checkbox-details'>
                        <div className='error-message' id='consentInputErrorMessage'></div>
                        <input
                            type='checkbox'
                            id='consent-input'
                            onChange={handleChange('Consent')}
                            defaultValue={values.Consent}

                        />Подтверждаю согласие на обработку персональных данных
                    </div>
                    <div className='checkbox-details'>
                        <input
                            type='checkbox'
                            id='notification-input'
                            onChange={handleChange('Notification')}
                            defaultValue={values.Notification}
                        />Оповещать, если по данному адресу найдены происшествия
                    </div>
                    <div className='btn-next'>
                        <button
                            className='steps-form-next'
                            onClick={this.continue}>
                            Далее
                        </button>
                    </div>


                </div>
            </div>
        )
    }
}

export default ThirdStep