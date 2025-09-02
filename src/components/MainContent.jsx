import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import '../styles/MainContent.css'; 
import image from '../assets/fb.png'; 

const MainContent = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            name: name,
            gender: gender,
            dob: dob,
          },
        },
      });

      if (error) {
        throw error;
      }

      const user = data.user;

      const { error: profileError } = await supabase.from('profiles').insert([
        {
          id: user.id,
          name: name,
          gender: gender,
          dob: dob,
        }
      ]);

      if (profileError) {
        console.log(profileError);
        throw profileError;
      }

      alert('Signup success! Check your email for confirmation link.');

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }

  };

  return (
    <main className="content">
      <section className="left">
        <h4 className="c-text">
        Connect and share with <br /> your friends from campus.
        </h4>
        <img src={image} alt="Facebook Network" className="img" />
      </section>

      <section className="right">
        <h1>Create an account</h1>
        <h2>and get started right now</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="name-fields">
            <input type="text" placeholder="User name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <input type="email" placeholder="Email address or mobile" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <h4>Birthday</h4>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />

          <h4>Gender</h4>
          <label><input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} /> Female</label>
          <label><input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} /> Male</label>
          <label><input type="radio" name="gender" value="custom" onChange={(e) => setGender(e.target.value)} /> Custom</label>

          <button type="submit" value="Sign Up" className="sign-up" disabled={loading}>Sign Up</button>
        </form>
      </section>
    </main>
  );
};

export default MainContent;