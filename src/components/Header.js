import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="py-3 header-container mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="myName">Youngobz</h1>
          </div>
          <div className="col align-self-center">
            <nav className="d-flex justify-content-around">
              <NavLink to="/about" className="nav-link nav-title text">
                ABOUT
              </NavLink>
              <NavLink to="/portfolio" className="nav-link nav-title text">
                Portfolio
              </NavLink>
              <NavLink to="/contact" className="nav-link nav-title text">
                Contact
              </NavLink>
              <NavLink to="/resume" className="nav-link nav-title text">
                Resume
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
