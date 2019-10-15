import React from 'react'
import {Link} from 'react-router-dom'
import logo_transparent from '../images/logo_transparent 1.png'

function navBar() {
    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className ="navbar-item">
                    <Link  to="/">
                         <img src={logo_transparent} alt="website logo" />
                    </Link>       
                </div>

                <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <Link to="/">
                                            
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>   
                </div>      
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">Home</Link>
                    <div className="navbar-item">
                        <div className="field">
                            <div className="control">
                                <input className="input" type="text" placeholder="Programming Language, e.g. Go"/>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-item">
                        <div className="field">
                            <div className="control">
                                <input className="input" type="text" placeholder="Location, e.g. New York"/>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-item">
                        <div className="control">
                            <button className="button is-link">Search</button>
                        </div>
                    </div>
                </div>


                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/" className="button is-primary">
                                <strong>Sign up</strong>
                            </Link>
                            <Link to="/" className="button is-light">
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