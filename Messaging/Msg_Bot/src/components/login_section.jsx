
export default function LoginSection() {
  return (
    <div className="login-section">
      <div className="login-section__header">
        <h1 className="login-section__header__title">Welcome to Msg Bot</h1>
        <p className="login-section__header__subtitle">Please log in to continue</p>
      </div>
      <div className="login-section__form">
        <form className="login-section__form__form">
          <div className="login-section__form__form__input-group">
            <label className="login-section__form__form__input-group__label" htmlFor="username">Username</label>
            <input className="login-section__form__form__input-group__input" type="text" id="username" name="username" required />
          </div>
          <div className="login-section__form__form__input-group">
            <label className="login-section__form__form__input-group__label" htmlFor="password">Password</label>
            <input className="login-section__form__form__input-group__input" type="password" id="password" name="password" required />
          </div>
          <button className="login-section__form__form__submit-button" type="submit">Log In</button>
        </form>
        {/* add functionality to enable log in with social media account like google */}
        <div className="login-section__form__social-media-login">
          <button className="login-section__form__social-media-login__google-login-button">Log in with Google</button>
          <button className="login-section__form__social-media-login__facebook-login-button">Log in with Facebook</button>
        </div>
      </div>
    </div>
  )
}