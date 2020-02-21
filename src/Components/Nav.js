import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from './UserContext';
import userImage from '../images/user.png';

function NavBar(props) {
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    
    const {user, password, login} = useContext(UserContext);

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

                <div className="navbar-end">
                    <div className="navbar-item">

                {
                    user.length > 0 && login ? 
                    
                        <figure className="image is-48x48" >
                            <img className="is-rounded" src={userImage} alt="Profile"></img>
                        </figure>
            
                    
                    :
                        <div className="buttons">
                            <Link to="/" className="button ">
                                <strong>Sign up</strong>
                            </Link>
                            <Link to="/login" className="button">
                                <strong>Log In</strong>
                            </Link>
                        </div>
                }

                    </div>
               </div>
            </div>
         </nav>
        );
}

export default NavBar;