import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../Components/UserContext';
import { Link } from 'react-router-dom';


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    margin-top: 100px;
    margin-bottom: 330px;
`;

const Hr = styled.hr`
    background-color: black;
    width: 70vw;
`;


function Login() {
    const {user, setUser, password, setPassword, login, setLogin} = useContext(UserContext);

    const handleEmail = (event) => {
        setUser(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    

    return (
        <Form>
        <h1 className="title">PseudoJobsHub Login </h1>
        <Hr></Hr>
        <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
                <input className="input" type="text" placeholder="example@example.com"
                        onChange={handleEmail}/>
                <span className="icon is-small is-left">
                <i class="fas fa-envelope-square"></i>  
                </span>
            </div>
        </div>

        <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left">
                <input className="input" type="password" placeholder="***********"
                        onChange={handlePassword}/>
                <span className="icon is-small is-left">
                <i class="fas fa-key"></i>  
                </span>
            </div>
        </div>
        
        <div className="field">
            <div className="control">
                <Link to={{
                    pathname: '/'
                }}>
                    <button className="button is-link"
                            onClick= { () => {
                                setLogin(true);
                            }}>Submit</button>
                </Link>
            </div>
        </div>
        </Form>
    );
}

export default  Login;