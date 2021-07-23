import React from 'react'
import './About.scss';
import Wrapper from '../../components/wrapper/Wrapper';
import QualityCard from '../../components/qualityCard/QualityCard';
import Heading from '../../components/heading/Heading';
import Container from '../../components/container/Container'

function About() {
    return (

        <div id="about">
            <Wrapper bg="">
                <Container>
                    <Heading title="About Me" />




                    <div className="about-top" >
                        {/* <>
                        <QualityCard type="sass" color="red" />
                        <p> I am this, I am That</p>
                        </> */}

                        <p> I am a software Engineer with focus on front End Technologies. I have good knowledge and practise of
                            responsive UI, Algorithms and Data structure, Database management using Mysql and Postgresql. Below are the
                            stacks I am conversant with.
                        </p>

                        <div className="quality-cards">
                            <QualityCard title="sass" type="sass" size="2x" />
                            <QualityCard title="html5" type="html5" size="2x" />
                            <QualityCard title="css3" type="css3" size="2x" />
                            <QualityCard title="javascript" type="js" size="2x" />
                            <QualityCard title="react" type="react" size="2x" />
                            <QualityCard title="vue" type="vuejs" size="2x" />
                            <QualityCard title="node Js" type="node" size="2x" />
                            <QualityCard title="python" type="python" size="2x" />
                            <QualityCard title="sql" type=". fas fa-database" size="2x" />
                            <QualityCard title="terminal" type=". fas fa-terminal" size="2x" />
                        </div>





                    </div>
                    <div className="about-bottom"> 
                    <h2 style={{marginBottom: "25px"}}>Qualities</h2>
                    <div className="qualities">
                   <div className="quality-item">
                   <QualityCard type=". fas fa-code" size="2x" title='algo & DS'> With an understanding of Data structures and Algorithm, I am able to write clean 
                        and efficient code with scalability always in mind.
                    </QualityCard>
                   </div>
                   <div className="quality-item">
                    <QualityCard type=". fas fa-people-carry" size="2x" title="Team Player"> Having worked as part of a team severly, I can confidently say I function well as part of a team of any size</QualityCard>
                    </div>
                   <div className="quality-item">
                    <QualityCard type=". fas fa-graduation-cap" size="2x" title="Teachable"> I am always ready to learn and take up challeges with a goal of becoming a better developer with each task</QualityCard>
                    </div>
                   <div className="quality-item">
                    <QualityCard type=". fas fa-graduation-cap" size="2x" title="Proactive and Intuitive"> \One of my best qualities is proactivity. One which I am always concious of and apply in any team I work with</QualityCard>
                    </div>


                    </div>
                    
                    
                      </div>

                </Container>


            </Wrapper>
        </div>
    )
}

export default About



