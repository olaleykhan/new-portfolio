import React from 'react';
import './ProjectCard.scss';

function ProjectCard({ title, description, image, tech, live, code }) {
    return (
        <div className="projectCard">

            <img src={image} alt={title}></img>
            <div className="content">
                <h2> {title}</h2>
                <p>{description} </p>
                <div className="techs">{tech.map((tech, i) => {
                    return <span key={i}> <i className={"fab fa-3x fa-"+ tech} ></i> </span>
                })}</div>

                <div className="buttons">
                    {live && <a href={live} target="_blank" rel="noreferrer" ><button className="left-button"> Live</button></a>}
                    {code && <a href={code} target="_blank" rel="noreferrer" ><button> code-base </button></a>}
                    
                    
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
