import React from 'react';
import './Navbar.scss';
import Container from '../../components/container/Container';

function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={` navbar ${menuOpen? "active": ""}`}>
            <Container>
                <nav>
                    <h4><a className="home-link" href="#welcome"> <img style={{width:"40px",marginBottom:"-10px"}} alt="logo" src="./images/logo.png"/> Home </a> </h4>
                    <div>
                        <ul>
                            {/* <li> <a href="/"> </a></li> */}
                            <li onClick={()=>setMenuOpen(true)}> <a href="#about"> About </a></li>
                            <li onClick={()=>setMenuOpen(true)}> <a href="#projects"> Projects</a></li>
                            <li onClick={()=>setMenuOpen(true)}> <a href="#contact"> Contact</a></li>
                            <li onClick={()=>setMenuOpen(true)}> <a href="https://blog.lekan.dev" target="_blank" rel="noreferrer" id="blog-link"> Blog</a></li>
                        </ul>


                    </div>
                </nav>

            </Container>
            <div className="hambuger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="my-line"></span>
                <span className="my-line"></span>
                <span className="my-line"></span>

            </div>
        </div>
    )
}

export default Navbar
