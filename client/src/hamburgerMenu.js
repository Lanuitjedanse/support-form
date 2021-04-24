import { NavLink } from "react-router-dom";
// import { ReactComponent as House } from "./client/public/house.svg";
// import Playlist from "./playlist";

export default function HamburgerMenu({ toggleBurgerMenu }) {
    // console.log("props.toggleBurgerMenu: ", props.toggleBurgerMenu);
    return (
        <nav>
            <ul className="hamburger-menu">
                <NavLink
                    onClick={toggleBurgerMenu}
                    exact
                    to="/report-issue"
                    activeClassName="burger-active"
                >
                    <img className="menu-icon" src="/profile.svg" />

                    <li>Report an Issue</li>
                </NavLink>
                <NavLink
                    exact
                    to="/all-issues"
                    activeClassName="burger-active"
                    onClick={toggleBurgerMenu}
                >
                    <img className="menu-icon" src="/location.svg" />
                    <li>All issues</li>
                </NavLink>
            </ul>
        </nav>
    );
}
