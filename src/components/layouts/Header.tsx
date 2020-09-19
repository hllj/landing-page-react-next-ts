import Link from "next/link"
import React from "react";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef(null);

  const handleScroll = () => {
    if (headerRef.current) {
      setSticky(headerRef.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <header ref={headerRef} id="header" className={`${isSticky === true ? 'sticky-header' : ''}`}>
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
                    <li><a href="#about-us" className="smoothanchor">About Us</a></li>
                    <li><a href="#about-team" className="smoothanchor">Our Team</a></li>
                    <li><a href="#our-work" className="smoothanchor">Our Work</a></li>
                    <li><a href="#blog" className="smoothanchor">Our Blog</a></li>
                    <li><a href="#price" className="smoothanchor">Pricing</a></li>
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
      <span onClick={() => {window.scrollTo(0, 0)}} id="back-top" className={`fa fa-arrow-up ${isSticky === true ? 'active' : ''}`}></span>
    </React.Fragment>
  )
}

export default Header;