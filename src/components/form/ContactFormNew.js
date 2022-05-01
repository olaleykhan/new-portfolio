import React, {useState} from 'react'
import { useForm, ValidationError } from '@formspree/react';

import Input from '../input/Input';
import Button from '../button/Button';
import './ContactForm.scss';

const ContactFormNew = () => {
    const [state, handleSubmit] = useForm("xqknggpw");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [fullName, setFullName] = useState('');
    if (state.succeeded) {
        return <p>Thanks for reaching out!</p>;
    }
  return (
    <form onSubmit={handleSubmit}>
        
        <h3 className="form-title"> Please FIll this form to reach out to me</h3>
    <Input
      id="full-name"
      label="Full Name"
      type="text" 
      name="full-name"
      required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
    />
    <ValidationError 
      prefix="name" 
      field="full-name"
      errors={state.errors}
    />

    <Input
      id="email"
      type="email" 
      name="email"
      label="Email"
      required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        err={state.errors[0]?.field==="email" ?  "field " +state.errors[0].message: "" }
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
    <Input type="textarea" id="message"
    label="message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
      name="message" />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />
    {/* {console.log(state?.errors)} */}

    <Button style={{marginLeft: "10px"}} type="submit" disabled={state.submitting} > Submit</Button>
  </form>
  )
}

export default ContactFormNew