import React, {Component} from 'react'

export class FinalStep extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        const {
            values: {
                FirstName,
                LastName,
                Email,
                PhoneNumber,
                Address,
                DateTime,
                Consent,
                Notification
            }
        } = this.props

        return(



            <div>
                <button
                    className='btn-back'
                    onClick={this.back}>
                    Назад
                </button>
                <div>

                    <div>
                        <span>Имя: </span>
                        {FirstName}
                    </div>
                </div>
                <div>
                    <div>
                        <span>Фамилия: </span>
                        {LastName}
                    </div>
                </div>
                <div>
                    <div>
                        <span>Адрес эл.почты: </span>
                        {Email}
                    </div>
                </div>
                <div>
                    <div>
                        <span>Номер телефона: </span>
                        {PhoneNumber}
                    </div>
                </div>
                <div>
                    <div>
                        <span>Адрес: </span>
                        {Address}
                    </div>
                </div>
                <div>
                    <div>
                        <span>Дата и время: </span>
                        {DateTime}
                    </div>
                </div>

                <div>
                    <div>
                        <span>Согласие на обработку персональных данных: </span>
                        {Consent}
                    </div>
                </div>
                <div>
                    <div>
                        <span>Оповещение о происшествиях по указанному адресу: </span>
                        {Notification}
                    </div>
                </div>

            </div>

        )
    }
}

export default FinalStep