import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function SignIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [checked, setCheck] = useState(false)
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onChangeCheck = (e) => {
    setCheck(e.target.checked)
  }
  return(
    <>
    <main className="main">

      <div className="breadcrumb-area">
          <div className="container">
              <div className="breadcrumb-wrapper">
                  <h1>Sign In</h1>
                  <div>
                      <ul className="breadcrumb">
                          <li className="breadcrumb__item"><Link to='/'> Home</Link></li>
                          <li className="breadcrumb__item breadcrumb__item--active">Sign In</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <div className="signin-area pt-30" >
          <div className="container">
              <div className="row row--grid">
                  <div className="sign">
          <div className="sign__content">
            <form action="#" className="sign__form">
              <a href="index.html" className="sign__logo">
                <img src="assets/img/logo/logo.png" alt=""/>
              </a>

              <div className="sign__group">
                <input type="text" className="sign__input" placeholder="Email" value={email} onChange={onChangeEmail}/>
              </div>

              <div className="sign__group">
                <input type="password" className="sign__input" placeholder="Password" value={password} onChange={onChangePassword}/>
              </div>

              <div className="sign__group sign__group--checkbox">
                <input id="remember" name="remember" type="checkbox" checked = {checked} onChange={onChangeCheck}/>
                <label for="remember">Remember Me</label>
              </div>
              
              <button className="sign__btn" type="button">Sign in</button>

              {/* <span className="sign__delimiter">or</span>

              <div className="sign__social">
                <a className="fb" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="tw" href="#"><i className="fab fa-twitter"></i></a>
                <a className="gl" href="#"><i className="fab fa-google"></i></a>
              </div> */}

              <span className="sign__text">Don't have an account? <Link to='/signup'>Sign up!</Link></span>

              <span className="sign__text"><a href="forgot.html">Forgot password?</a></span>
            </form>
          </div>
        </div>
              </div>
          </div>
      </div>

      </main>
    </>
  )
}