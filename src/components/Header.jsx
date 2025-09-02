import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import '../styles/Header.css';

const Header = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {

            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                throw error;
            }

            alert('Login Successful!');

        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <header className = "header">
            <div className = "logo">
                <a className = "logo-text" href="/">mec.connect</a>
            </div>

            <div className = "login">
                <form className = "login-form">
                    <label htmlFor="email">Email or phone</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
                    <button type="submit" className="log-button" disabled={loading}>Log In</button>
                    <a className="forgot" href="#">Forgot Password?</a>
                </form>
            </div>
        </header>
    );
};

export default Header;