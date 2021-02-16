import React, {Component} from 'react'
import './Styles/Styles.css'
export class FirstStep extends Component {

continue = (e) => {
    const firstNameInput = document.getElementById('first-name-input');
    const lastNameInput = document.getElementById('last-name-input');
    const errorMessageFirstNameInput = document.getElementById('errorMessageFirstName');
    const errorMessageLastNameInput = document.getElementById('errorMessageLastName');

    if (firstNameInput.value === '') {
        firstNameInput.style.boxShadow = '0px 0px 15px 0px red';
        errorMessageFirstNameInput.innerHTML = 'Заполните поле';
    }

    else if (lastNameInput.value === '') {
        lastNameInput.style.boxShadow = '0px 0px 15px 0px red';
        errorMessageLastNameInput.innerHTML = 'Заполните поле';
    }

    else {
        e.preventDefault();
        this.props.nextStep();
    }


};

    render() {
        const {values, handleChange} = this.props;
        const errorReset = () => {
        const firstNameInput = document.getElementById('first-name-input');
        const lastNameInput = document.getElementById('last-name-input');
            const errorMessageFirstNameInput = document.getElementById('errorMessageFirstName');
            const errorMessageLastNameInput = document.getElementById('errorMessageLastName');

        if (firstNameInput.value !== '') {
            firstNameInput.style.boxShadow = '';
            errorMessageFirstNameInput.style.display = 'none';

        }

        if (lastNameInput.value !== '') {
            lastNameInput.style.boxShadow = '';
            errorMessageLastNameInput.style.display = 'none';
        }
        }
        return(

            <div className='step-details'>
                <div className='step-container' onChange={errorReset}>

                       <div className='input-details'>
                           Имя:
                           <div className='error-message' id='errorMessageFirstName'></div>
                        <input
                        type='text'
                        id='first-name-input'
                        placeholder='Укажите имя'
                        onChange={handleChange('FirstName')}
                        defaultValue={values.FirstName}
                        />
                       </div>


                        <div className='input-details'>
                            Фамилия:
                            <div className='error-message' id='errorMessageLastName'></div>
                        <input
                            type='text'
                            id='last-name-input'
                            placeholder='Укажите фамилию'
                            onChange={handleChange('LastName')}
                            defaultValue={values.LastName}
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

export default FirstStep