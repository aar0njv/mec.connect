import React from 'react';
import '../styles/MainContent.css'; 
import image from '../assets/fb.png'; 

const MainContent = () => {
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
        <form action="signup.php" method="POST" className="signup-form">
          <div className="name-fields">
            <input type="text" placeholder="User name" name="user_name" required />
          </div>

          <input type="text" placeholder="Email address or mobile" name="email" required />
          <input type="password" placeholder="New password" name="password" required />

          <h4>Birthday</h4>
          <input type="date" name="birthday" required />

          <h4>Gender</h4>
          <label><input type="radio" name="gender" value="female" /> Female</label>
          <label><input type="radio" name="gender" value="male" /> Male</label>
          <label><input type="radio" name="gender" value="custom" /> Custom</label>

          <input type="submit" value="Sign Up" className="sign-up" />
        </form>
      </section>
    </main>
  );
};

export default MainContent;