import React from "react";
import "./style.css"
import SignIn from "../../pages/SignIn";
import Hero from "../Hero";
import { Link, NavLink } from "react-router-dom";

// function Navbar(props) {
//     return(<header>
//         Header
//         <Hero />
//         <SignIn />
//     </header>)
// }

function Header() {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Force Mastery Tracker
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarTogglerDemo02" 
                    aria-controls="navbarTogglerDemo02" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink 
                            to="/SignIn" 
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            >
                            Sign In
                            </NavLink> 
                        </li>

                        {/* <li className="nav-item">
                            <NavLink 
                            to="/LogIn" 
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            >
                            Log In
                            </NavLink> 
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
