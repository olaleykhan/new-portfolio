import React from 'react';
import Button from '../../components/button/Button';
import './Navbar.scss';
import Container from '../../components/container/Container';

function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={` navbar ${menuOpen&& "active"}`}>
            <Container>
                <nav>
                    <h4><a href="#welcome">ALaf Consult</a> </h4>
                    <div>
                        <ul>
                            {/* <li> <a href="/"> </a></li> */}
                            <li> <a href="#about"> About </a></li>
                            <li> <a href="#projects"> Projects</a></li>
                            <li> <a href="#contact"> Contact</a></li>
                            <li> <a href="/"> Github</a></li>
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
