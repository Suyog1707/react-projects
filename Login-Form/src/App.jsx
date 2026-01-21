import { useState } from 'react'
import './App.css'

function App() {

  function LoginForm() {

      const [isButtonShow, setIsButtonShow] = useState(false);

      function passwordShowButton () {
          if (isButtonShow)
              setIsButtonShow(false);
          else
              setIsButtonShow(true);
      }

      return (
          <>
              <div>
                  <input 
                      placeholder="Email" 
                      className="text-box"
                      size='38'
                  />
              </div>
              <div>
                  <input 
                      placeholder="Password" 
                      className="text-box"
                      size='38'
                      
                      type={isButtonShow ? 'text' : 'password'}
                  />
                  <button 
                      onClick={passwordShowButton}
                  >
                      {isButtonShow ? 'Hide' : 'Show'}
                  </button>
              </div> 
              <button className="buttons">Login</button>
              <button className="buttons">Sign up</button>
          </>
      );
  }

  return (
      <>
          <h1 className='title'>Hello, welcome to my website</h1>
          <LoginForm />
      </>
  );
}

export default App
