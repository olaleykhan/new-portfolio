import React, { Component } from 'react';
import './Projects.scss';
import Wrapper from '../../components/wrapper/Wrapper';
import { projects } from '../../assets/projectData';
import ProjectCard from '../../components/ProjectCard/ProjectCard';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'all',
            projects: projects
        }
    }
    handleChangeTab = (tab) => {
        this.setState({ activeTab: tab });
        const filteredProjects = projects.filter((project) => {
            if (tab === 'all');
            return project.tech.includes(tab)
        });

        this.setState({ projects: filteredProjects });
    }
    render() {
        return (
            <div id="projects" className="projects">
                <div className="wrap">
                    <h1>Portfolio</h1>
                    <ul>
                        <li className={this.state.activeTab === "all" && "active"} onClick={() => this.handleChangeTab('all')} >All</li>
                        <li className={this.state.activeTab === "react" && "active"} onClick={() => this.handleChangeTab('react')} >React</li>
                        <li className={this.state.activeTab === "vuejs" && "active"} onClick={() => this.handleChangeTab('vuejs')}>Vue</li>
                        {/* used js-square below because that is the fontawesome icome I used */}
                        <li className={this.state.activeTab === "js-square" && "active"} onClick={() => this.handleChangeTab('js-square')}>Vanilla</li>
                        <li className={this.state.activeTab === "node" && "active"} onClick={() => this.handleChangeTab('node')}>Node Js</li>
                        <li className={this.state.activeTab === "python" && "active"} onClick={() => this.handleChangeTab('python')}>Python</li>
                    </ul>

                    <div className="container">
                        {this.state.projects.map((project) => {
                            return <ProjectCard {...project} />
                        })}
                    </div>


                </div>
            </div>
        )
    }
}


export default Projects
