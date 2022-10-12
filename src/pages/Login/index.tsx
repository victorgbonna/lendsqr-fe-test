import { useState } from 'react';
import Button from '../../components/Button';
import InputGroup from '../../components/InputGroup';
import './Login.css'

export default function Login() {
    const [email, setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [isSubmitting, setIsSubmitting]= useState(false)
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
    const variantsForBtn={
        padding:'16px',
        color: '#FFFFFF',
        background: '#39CDCC',
        borderRadius: '8px',
        fontFamily: 'Avenir Next',
        fontWeight: '400px',
        fontSize: '14px',
        lineHeight: '19px',
        border: '2px solid rgba(84, 95, 125, 0.15)',
        textAlign: 'center',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
    }
    return (
      <div className="App">
        <main className='hero' style={{height:"100vh"}}>
          <div className='mainhero'>
            <div className='logo'>
              <img src="/svg/union.svg" alt="Lendr logo" />
              <h3>Lendsqr</h3>
            </div>
            <img src="/svg/hero-signin.svg" alt="hero signing" />
          </div>
          <div className='loginForm'>
            <h3>Welcome</h3>
            <p>Enter details to login.</p>
            <form>
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
                <Button disabled={isSubmitting} type="button" 
                  variants={variantsForBtn} 
                  onClick={()=>null} label="Login"/>
              </div>
              
            </form>
          </div>
        </main>
      </div>
    );
}
  