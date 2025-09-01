import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className = "header">
            <div className = "logo">
                <a className = "logo-text" href="/">mec.connect</a>
            </div>

            <div className = "login">
                <form className = "login-form">
                    <label htmlFor="email">Email or phone</label>
                    <input type="text" id="email" name="email" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
          
                    <input type="submit" value="Login" className="log-button" />
                    <a className="forgot" href="#">Forgot Password?</a>
                </form>
            </div>
        </header>
    );
};

export default Header;