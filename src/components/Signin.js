import React, { useState } from 'react';
import "./Signin.css";
import Cookies from 'js-cookie';



const Signin = () => {

    const status = true;
    const role = "judge";
    // const role = "fileAccess";
    // const role = "fileChecker";

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // For displaying errors

    if (Cookies.get('username') != null) {
        window.location.href = '/dashboard';
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = {
            username: name,
            password,
        };

        try {
            // const response = await axios.post('/login', {
            //     username: name,
            //     password,
            // });
            const data = {
                username: name,
                status,
                role,


            };


            // if (response.data.success) {
            //     // Successful authentication, redirect based on user type
            //     if (response.data.userType === 'user') {
            //         window.location.href = '/user-page';
            //     } else if (response.data.userType === 'clerk') {
            //         window.location.href = '/clerk-page';
            //     } else {
            //         console.error('Unexpected user type received from server');
            //     }
            // }
            if (Object.keys(data).length !== 0) {
                if (data.status === true) {
                    if (data.role === "judge") {
                        window.location.href = '/dashboard/judge';
                        Cookies.set("username", data.username, { expires: 2 })
                        Cookies.set("role", data.role, { expires: 2 })
                    } else if (data.role === "fileChecker") {
                        window.location.href = '/dashboard/file-checker';
                        Cookies.set("username", data.username, { expires: 2 })
                        Cookies.set("role", data.role, { expires: 2 })
                    } else if (data.role === "fileAccess") {
                        window.location.href = '/dashboard/file-access';
                        Cookies.set("username", data.username, { expires: 2 })
                        Cookies.set("role", data.role, { expires: 2 })
                    }
                }
                else {
                    console.error('Unexpected user type received from server');
                }
            }
            else {
                setErrorMessage(response.data.message || 'Login failed'); // Handle server-side error message
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('An error occurred. Please try again later.'); // Generic error message for user
        }

    };

    return (
        <div>
            <div className="signin">
                <img src="evault-logo.png" alt="eVault" className='evault__banner' />
                <div className="right">
                    <form >
                        <div className="grid">
                            <p className='signin__p'>Sign in</p>
                            <div className="name">
                                <img src="profile.png" alt="" style={{ marginLeft: "15px" }} />
                                <input type="text" id="name" name="name" className='name__textbox' placeholder='Username' onChange={(e) => setName(e.target.value)}></input>
                            </div>
                            <div className="password">
                                <input type="password" id="password" name="password" className='password__textbox' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                            {/* <div className="state">
                            <select name="state" id="state" className='state__select' onChange={(e) => setState(e.target.value)}>
                                <option value="null" >State</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                            </select>
                            <img src="down.png" alt="" />
                        </div> */}
                            <div className="next">
                                <div >
                                    <button className="next__button" onClick={handleSubmit} style={{ "color": "white", "cursor": "pointer" }}><p className="next__b">Next</p></button>
                                </div>
                                {errorMessage && <p className="error-message">{errorMessage}</p>}
                            </div>
                            <div className="help">

                                <a href="/register" className='new__user'>New user? Register here</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin

