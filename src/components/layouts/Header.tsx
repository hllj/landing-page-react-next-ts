import Link from "next/link"

const Header = () => {
  return (
    <header id="header" className="sticky-header">
      <div className="max-container">
        <strong className="logo">
          <Link href="#">
            <a >
              <i className="icon">#</i>
              <span className="img">
                <img src="images/logo.svg" alt="EAGLEEYES" />
              </span>
            </a>
          </Link>
        </strong>
        <div className="align-right">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav" id="nav-smooth">
                  <li className="active"><a href="#wrapper" className="smoothanchor">Home</a></li>
                  <li><a href="#section1" className="smoothanchor">About Us</a></li>
                  <li><a href="#section2" className="smoothanchor">Our Team</a></li>
                  <li><a href="#section3" className="smoothanchor">Our Work</a></li>
                  <li><a href="#section4" className="smoothanchor">Our Blog</a></li>
                  <li><a href="#section5" className="smoothanchor">Pricing</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="search-area">
            <div className="search-box">
              <a className="search" href="#"><i className="fas fa-search"></i></a>
              <input type="search" placeholder="Search" />
            </div>
            <a href="#" className="mail"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;