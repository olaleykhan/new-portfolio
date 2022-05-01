import React, { Component } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import './ContactForm.scss';

export class ContactForm extends Component {

    constructor(props) {
        super(props);
        // this.service = new authService();
        this.state = {
            // user: {
            fullName: "",
            email: "",
            message: "",
            // },
            loading: false,
            error: false,
            touched: {
                fullName: false,
                email: false,
                message: false
            },
            formValid: false,
            formError: false,
        }

        this.handleblur = this.handleblur.bind(this);
        this.formValid = false;
    }

    handleInputChange = (e) => {
        let { id, value } = e.target;
        this.setState({ [id]: value });
        // console.log(id,value)
    }

    handleFormSubmit = (e) => {
        const user = {
            fullName: this.state.fullName,
            email: this.state.email,
            message: this.state.message,
        }

        // e.preventDefault();
        if(this.formValid){
            console.log(user);
            // this.props.signup(user);
            
        } else{
            this.displayError();
        }

    }


    displayError = () => {
        this.setState({ formError: true })
        setTimeout(() => {
            this.setState({ formError: false })


        }, 3000);
    }
    handleblur = (field) => (evt) => {

        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(fullName, email, message) {
        let errors = {
            fullName: "",
            email: "",
            message: ""
        };


        if (this.state.touched.fullName && fullName.length < 2) {
            errors.fullName = "Full name should be greater than 2 characters"
        }



        if (this.state.touched.message && message.length < 10) {
            errors.message = "message too short"
        }
        if ((this.state.touched.email && !email.includes('@')) || (this.state.touched.email && !email.includes('.')) || (this.state.touched.email && email[email.length - 4] !== '.' && email[email.length - 3] !== '.')) {
            errors.email = "this does not look like a valid email. please adjust appropriately."
        }
        if (errors.fullName.length < 1 && errors.email.length < 1 && errors.message.length < 1 && this.state.fullName.length > 0 && this.state.email.length > 0 && this.state.message.length > 0) {
            this.formValid = true;
        } else {
            this.formValid = false;

        }
        return errors;

    }

    render() {

        const errors = this.validate(this.state.fullName, this.state.email, this.state.message);
        return (
            <>
                {this.state.formError && <h4 style={{color:"red"}}> Please Fill form appropriately</h4>}
                
                <form  action="https://formspree.io/f/xqknggpw"
  method="POST" onSubmit={this.handleFormSubmit}>
                <h3 className="form-title"> Please FIll this form to reach out to me</h3>
                    <Input label="Full Name" type="input" id="fullName" value={this.state.fullName} onBlur={this.handleblur('fullName')} err={errors.fullName} onChange={this.handleInputChange} />
                    <Input label="email" type="input" id="email" value={this.state.email} onBlur={this.handleblur('email')} err={errors.email} onChange={this.handleInputChange} />
                    <Input label="Message" type="textarea" id="message" value={this.state.message} onBlur={this.handleblur('message')} err={errors.message} onChange={this.handleInputChange} />
                    <Button style={{marginLeft: "10px"}} > Submit</Button>
                </form>

            </>
        )
    }
}

export default ContactForm

