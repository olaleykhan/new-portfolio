import React from 'react';
import './Contact.scss';
import Wrapper from '../../components/wrapper/Wrapper';
import ContactForm from '../../components/form/ContactForm';
import Heading from '../../components/heading/Heading';
import Icon from '../../components/icon/Icon';

function Contact() {
    return (

        <div id="contact" >
            <Wrapper bg="">
            <Heading title="Contact" />
                <div className="contact">
                    
                    <div className="left"> <ContactForm/> </div>

                    <div className="right">
                        <Icon link="https://www.linkedin.com/in/olalekan-abdulfatah-a8112198/" hover={true} type="linkedin-in" size="2x" color="$primary"/>
                        <Icon link="https://twitter.com/lekan_dev" hover={true} type="twitter" size="2x" color="$primary"/>
                        <Icon link="https://github.com/olaleykhan" hover={true} type="github" size="2x" color="$primary"/>
                        <Icon link="https://www.instagram.com/olaleykhan/" hover={true} type="instagram" size="2x" color="$primary"/>
                        <Icon link="https://wa.me/2347067616006" hover={true} type="whatsapp" size="2x" color="$primary"/>
                    </div>

                </div>

                <footer> &copy; {new Date().getFullYear()}  Abdullah Olalekan. All rights reserved. </footer>
                
            </Wrapper>
        </div>

    )
}

export default Contact
