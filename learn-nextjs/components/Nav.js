// Nav.js
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav className="nav has-shadow">
              <div className="container">
                <div className="nav-left">
                  <Link href='/'>
                    <a className="nav-item"> Brand </a>
                  </Link>
                  <Link href='/about'>
                    <a className="nav-item is-tab is-hidden-mobile"> About Me </a>
                  </Link>
                </div>
                <span className="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
            </nav>
        </div>
    )
}

export default Navbar