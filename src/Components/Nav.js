import React from 'react'
import {Link} from 'react-router-dom'
import logo_transparent from '../images/logo_transparent 1.png'

function navBar() {

    const handleClick = () => {
        console.log("ok")
    }

    return (
        <nav className="navbar is-fixed-top is-link" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
                <div className ="navbar-item">
                    <Link  to="/">
                         <img src={logo_transparent} alt="website logo" />
                    </Link>       
                </div>

                <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" 
                onClick={() => {
                    let menu = document.querySelector(".navbar-menu")
                    menu.classList.toggle("is-active")
                }}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    
                </div>      
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">Home</Link>
                    <div className="navbar-item">
                        <div className="field">
                            <div className="control">
                                <input className="input" type="text" placeholder="Programming Language, e.g. Go" onChange={()=>{}}/>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-item">
                        <div className="field">
                            <div className="control">
                                <input className="input" type="text" placeholder="Location, e.g. New York" onChange={() => {}}/>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-item">
                        <div className="control">
                          <Link to="/jobs">
                            <button className="button is-info" onClick={() => handleClick()}>Search</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/" className="button is-primary">
                                <strong>Sign up</strong>
                            </Link>
                            <Link to="/" className="button is-info">
                                Log In
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

         </nav>
        );
}

export default navBar;