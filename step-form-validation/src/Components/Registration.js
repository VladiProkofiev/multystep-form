import React, {Component} from 'react'
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FinalStep from "./FinalStep";
import Maps from './Map'

export class Registration extends Component {

    state = {
        step: 1,
        FirstName: '',
        LastName: '',

        Email: '',
        PhoneNumber: '',
        Address: '',
        DateTime: '',

        Consent: false,
        Notification: false

    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };



    submitHandler = () => {
        console.log(this.state)
    }

render() {
    const {step} = this.state;
    const {FirstName, LastName, Email, PhoneNumber, Address, DateTime, Consent, Notification} = this.state
    const values = {FirstName, LastName, Email, PhoneNumber, Address, DateTime, Consent, Notification}

    switch (step) {
        case 1:
            return (
                <FirstStep
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
        case 2:
            return (
                <SecondStep
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
        case 3:
            return (
                <ThirdStep
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
        case 4:
            return (


                 <FinalStep
                     prevStep={this.prevStep}
                     values={values}
                />
            )
        default :
            return(
                <FirstStep
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
    }

}

}

export default Registration