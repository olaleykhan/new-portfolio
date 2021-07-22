import React from 'react';
import './Welcome.scss';
import myPic from '../../assets/alaf-real.png';
import Button from '../../components/button/Button';
function Welcome() {
    return (
        <div id="welcome" className="welcome">
            <div className="left">
                <div className="img-container">
                    <img className="img" alt="Abdullah Olalekan" src={myPic} />
                </div>

            </div>
            <div className="right">

                <h1>Hello, I'm Abdullah.</h1>
                <h3>A <span className="text-primary">Software Engineer</span> </h3>
                <p>self-motivated, with a passion to become world class. <br/> Day and night, I put in
                    the work to become this. With this kind of mindset, you can be sure I will be an asset to your company.  
                    <div style={{color:"orange"}}> Please do check out my blog from the Nav below</div>
                     </p>

                <a href="#projects" className="welcome-btn">
                <Button>
                <i className="fa fa-chevron-down"></i> <span style={{fontSize: "20px"}} className="icon-text">Projects</span>
                </Button>
                </a>
               

            </div>

        </div>
    )
}

export default Welcome
