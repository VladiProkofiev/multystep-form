import React, {Component} from 'react'
import './Styles/Styles.css'

import Maps from "./Map";


export class SecondStep extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = (e) => {
        const email = document.getElementById('email-input')
        const phone = document.getElementById('phone-number-input')
        //const address = document.getElementById('address-input')
        const dateTime = document.getElementById('date-time-input')
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        const phoneRegex = /^\d[\d\(\)\ -]{4,14}\d$/
        const emailInputErrorMessage = document.getElementById('emailInputErrorMessage')
        const phoneInputErrorMessage = document.getElementById('phoneInputErrorMessage')
        const addressInputErrorMessage = document.getElementById('addressInputErrorMessage')


        if(email.value === '' || !emailRegex.test(email.value)){
            email.style.boxShadow = '0px 0px 15px 0px red'
            emailInputErrorMessage.innerHTML = 'Введите корректный email '
        }

        if(phone.value === '' || !phoneRegex.test(phone.value)){
            phone.style.boxShadow = '0px 0px 15px 0px red'
            phoneInputErrorMessage.innerHTML = 'Введите корректный номер телефона '
        }
        // if(address.value === ''){
        //     address.style.boxShadow = '0px 0px 15px 0px red'
        //     addressInputErrorMessage.innerHTML = 'Заполните поле'
        // }
        if(dateTime.value === ''){
            dateTime.style.boxShadow = '0px 0px 15px 0px red'
        }
        else {
            e.preventDefault();
            this.props.nextStep();
        }

    };



    render() {

        const {values, handleChange} = this.props;
        const errorReset = () =>{
        const email = document.getElementById('email-input')
        const phone = document.getElementById('phone-number-input')
        // const address = document.getElementById('address-input')
        const dateTime = document.getElementById('date-time-input')
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            const phoneRegex = /^\d[\d\(\)\ -]{4,14}\d$/
            const emailInputErrorMessage = document.getElementById('emailInputErrorMessage')
            const phoneInputErrorMessage = document.getElementById('phoneInputErrorMessage')
            const addressInputErrorMessage = document.getElementById('addressInputErrorMessage')

            if(email.value !== '' && emailRegex.test(email.value)){
                email.style.boxShadow = ''
                emailInputErrorMessage.style.display = 'none'
             }

        if(phone.value !== '' && phoneRegex.test(phone.value)){
            phone.style.boxShadow = ''
            phoneInputErrorMessage.style.display = 'none'
        }
        // if(address.value !== ''){
        //     address.style.boxShadow = ''
        //     addressInputErrorMessage.style.display = 'none'
        // }
        if(dateTime.value !== ''){
            dateTime.style.boxShadow = ''
        }
    };
        return (
            <div className='step-details'>
                <div className='step-container' onChange={errorReset}>
                    <button
                        className='btn-back'
                        onClick={this.back}>
                        Назад
                    </button>
                    <div className='input-details'>
                        Адрес почты:
                        <div className='error-message' id='emailInputErrorMessage'></div>

                            <input
                                type='text'
                                id='email-input'
                                placeholder='Укажите адрес эл.почты'
                                onChange={handleChange('Email')}
                                defaultValue={values.Email}
                            />

                    </div>
                    <div className='input-details'>
                        Номер телефона:
                        <div className='error-message' id='phoneInputErrorMessage'></div>
                            <input
                                type='text'
                                id='phone-number-input'
                                placeholder='Укажите номер телефона'
                                onChange={handleChange('PhoneNumber')}
                                defaultValue={values.PhoneNumber}
                            />

                    </div>
                    <div className='input-details'>
                        Адрес:
                        <div className='error-message' id='addressInputErrorMessage'></div>
                        {/*{<Maps/>}*/}
                            {/*<input*/}
                            {/*    type='text'*/}
                            {/*    id='address-input'*/}
                            {/*    placeholder='Укажите адрес'*/}
                            {/*    onChange={handleChange('Address')}*/}
                            {/*    defaultValue={values.Address}*/}
                            {/*/>*/}
                        <button>Найти адрес</button>
                    </div>
                    <div className='input-details'>
                        Дата и время:

                            <input
                                type='datetime-local'
                                id='date-time-input'
                                placeholder='Укажите дату и время'
                                onChange={handleChange('DateTime')}
                                defaultValue={values.DateTime}
                            />

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

export default SecondStep