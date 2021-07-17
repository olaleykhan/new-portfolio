import React from 'react';
import './ProjectCard.scss';
import Button from '../button/Button';

function ProjectCard({ title, description, image, tech }) {
    console.log(tech)
    return (
        <div className="projectCard">

            <img src={image} alt={title}></img>
            <div className="content">
                <h2> {title}</h2>
                <p>{description} </p>
                <div className="techs">{tech.map((tech, i) => {
                    return <span key={i}> <i class={"fab fa-3x fa-"+ tech} ></i> </span>
                })}</div>

                <div className="buttons">
                    <button className="left-button"> Live</button>
                    <button> code-base </button>
                    
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
