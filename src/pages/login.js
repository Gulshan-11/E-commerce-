import React from 'react';
import {motion} from 'framer-motion';
import img from '../images/login-side.png';

const Login = () => {

  return (
    <motion.div
    initial={{ opacity: 0 ,x : 100 }}
    animate={{opacity: 1,x : 0}}
    exit={{opacity:0,x : -100}}
    transition={{duration:0.1}}
    >
        <section className='login-section'>
            <div  className='login-form'>
              <form method='GET'>
                <div>
                    <label name="username" for="username" >Username</label>
                    <input className="user-input"type="email" for="username" placeholder="Username"/>
                </div>
                <div>
                  <label for="password">Password</label>
                  <input type="password" minlength="8" placeholder="Password"/>
                </div>
                <button className='login-btn'>Login</button>
              </form>
            </div>
            <img className='login-side-img' src={img} alt="" />
        </section>
    </motion.div>
  )
}

export default Login;
