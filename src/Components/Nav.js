import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo_transparent from '../images/logo_transparent 1.png'

function NavBar() {
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    
    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleChangeLocation = (event) => {
        setLocation(event.target.value)
    }

    return (
        <nav className="navbar is-fixed-top" id="myNav" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
                <div className ="navbar-item">
                    <Link  to="/">
                         <h1 className="subtitle nav">JobsHub</h1>
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
                    {/* <Link to="/" className="navbar-item">
                        <button className="button">
                            <strong>Home</strong>
                        </button>
                    </Link> */}
                    <div className="navbar-item">
                        <div className="field">
                            <div className="control">
                                <input className="input" id="descriptionInput" type="text" placeholder="Programming Language, e.g. Go" onChange={handleChangeDescription}/>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-item">
                        <div className="field">
                            <div className="control">
                                <input className="input" id="locationInput" type="text" placeholder="Location, e.g. New York" onChange={handleChangeLocation}/>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-item">
                        <div className="control">
                          <Link to={{
                              pathname: '/jobs',
                              state: {
                                  description,
                                  location
                              }
                          }}>
                            <button className="button" onClick={() => {
                                document.getElementById("locationInput").value = ''
                                document.getElementById("descriptionInput").value = ''
                            }}>Search</button>
                            </Link>
                        </div>
                    </div>
                </div>


                {/* <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/" className="button ">
                                <strong>Sign up</strong>
                            </Link>
                            <Link to="/" className="button">
                                Log In
                            </Link>
                        </div>
                    </div>
                </div> */}
            </div>
         </nav>
        );
}

export default NavBar;