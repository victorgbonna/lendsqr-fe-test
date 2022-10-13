import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputGroup from '../../components/InputGroup';
import Logo from '../../components/Logo';
import './Login.css'

export default function Login() {
    const [email, setEmail]= useState('')
    const [password,setPassword]= useState('')
  
    const variantsForInputs={
        padding:'16px',
        fontFamily: 'Avenir Next',
        fontWeight: '400px',
        fontSize: '14px',
        lineHeight: '19px',
        color: '#545F7D',opacity: '0.6',
        border: '2px solid rgba(84, 95, 125, 0.15)',
        borderRadius: '5px'
      }
    return (
      <div className="App">
        <main className='hero' style={{height:"100vh"}}>
          <div className='mainhero'>
            <div className='logodiv'>
              <Logo/>
            </div>
            <img src="/svg/hero-signin.svg" alt="hero signing" />
          </div>
          <div className='loginForm'>
            <h3>Welcome</h3>
            <p>Enter details to login.</p>
            <div style={{width:"100%"}}>
              <div style={{marginBottom:"24px"}}>
                <InputGroup type='text' placeholder='Email'
                  hasError='' value={email} 
                  onChange={(e)=>setEmail(e.target.value)}
                  variants={variantsForInputs}/>
              </div>
              <div style={{marginBottom:"24px"}}>
                <InputGroup type='password' placeholder='Password' 
                  hasError='' value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  variants={variantsForInputs}/>
              </div>
              <p className="forgot">FORGOT PASSWORD</p>

              <div>
                <Link to='/dashboard' className='link-dashboard'>
                  Login        
                </Link>
              </div>
              
            </div>
          </div>
        </main>
      </div>
    );
}
  