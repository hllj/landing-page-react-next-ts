const Footer = () => {
  return (
    <footer id="footer">
      <div className="max-container">
        <div className="footer-container">
          <div className="info-review">
            <div className="footer-info">
              <strong className="logo-footer">
                <a href="#">
                  <i className="icon">#</i>
                  <span className="img">
                    <img alt="EAGLEEYES" src="images/logo-footer.svg" />
                  </span>
                </a>
              </strong>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa  officia deserunt mollitid est laborum. Sed ut perspiciatis unde qui omnis iste natus error sit voluptatem.</p>
              <div className="footer-address">
                <address>
                  <span className="yellow">A :</span> No 40 Baria Sreet 133/2 NewYork City, <br></br>NY,  United States
                </address>
                <span className="email">
                  <span className="yellow">E: </span>
                  <a href="mailto:info.contact@gmail.com">info.contact@gmail.com</a>
                </span>
                <span className="tel">
                  <span className="yellow">P: </span>
                  <a href="tel:00123456789">(00) 123 456 789</a>
                </span>
              </div>
            </div>
            <div className="review">
              <p>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                  <span>@Leonard design </span>
                </a>
                  I am so happy because I found this EAGLEEYES, and it just made EAGLEEYES easier. Thanks so much for sharing
                  </p>
              <p>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                  <span>@Leonard design </span>
                </a>
                  I am so happy because I found this EAGLEEYES, and it just made EAGLEEYES easier. Thanks so much for sharing
                </p>
              <p>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                  <span>@Leonard design </span>
                </a>
                  I am so happy because I found this EAGLEEYES, and it just made EAGLEEYES easier. Thanks so much for sharing
                </p>
            </div>
          </div>
          <div className="footer-contact">
            <form>
              <h3>We will love to hear from you!</h3>
              <input placeholder="Name" name="name" />
              <input placeholder="Email" name="email" />
              <textarea />
              <button id="submit" type="submit">send messages</button>
            </form>
          </div>
        </div>
        <div className="sub-footer">
          <ul className="sub-nav">
            <li><a href="#">About</a></li>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <span className="copyright">Copyright <a href="#">#EAGLEEYES</a> © 2015. All rights reserved.</span>
        </div>
      </div>
    </footer >
  )
}

export default Footer;