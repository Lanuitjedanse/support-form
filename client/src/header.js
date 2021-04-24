import HamburgerMenu from "./hamburgerMenu";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function Header(props) {
    // console.log("props in header: ", props);
    // const [mQuery, setMQuery] = useState();
    // const [screenSize, setScreenSize] = useState();

    // useEffect(() => {
    //     window.addEventListener("resize", updateSize);
    //     setScreenSize(window.innerWidth);
    //     // console.log("window.width: ", window.innerWidth);
    // });

    // const updateSize = () => {
    //     // console.log("size updated");
    //     let mql = window.matchMedia("(max-width: 900px)");
    //     setMQuery(mql.matches);

    //     // console.log(mql.matches); // true or falses
    // };

    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerOpen(!burgerOpen);
    };

    let srcA;

    burgerOpen ? (srcA = "/x-btn.svg") : (srcA = "/hamburgermenu.svg");

    return (
        <>
            <header>
                <div className="logo-title">
                    <h2 className="brand-header">Logo</h2>
                </div>
                <div className="menu-container">
                    <img
                        onClick={toggleBurgerMenu}
                        className="icon-menu"
                        src={srcA}
                    />
                </div>
            </header>
            {burgerOpen && (
                <HamburgerMenu toggleBurgerMenu={toggleBurgerMenu} />
            )}
        </>
    );
}
