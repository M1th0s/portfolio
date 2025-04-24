import { useEffect, useState } from "react";
import Navbar from "./Navbar";


const Header = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleNavbarClick = () => {
        setIsClicked(!isClicked);
    };

    useEffect(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 100) {
                setIsScrolling(true);
            }else{
                setIsScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    return <header className={ `header ${isScrolling ? 'scrolling' : ''}`}>
        <div className="container">
            <div className="header__content">
                {/* Logo */}
                <a href="/" className="logo">
                    <img width={100} height={100} src="/logo.svg" alt="logo"></img>
                </a>

                {/* Navbar */}
                <Navbar isClicked={isClicked} />

                {/* Menu icons */}
                <button
                    className="menu-icons"
                    aria-label={`${isClicked ? 'Close menu' : 'Open menu'}`}
                    onClick={handleNavbarClick}>

                    {isClicked ? (
                        <i className="fa-solid fa-close" aria-label="true"></i>
                    ) : (
                        <i className="fa-solid fa-bars" aria-label="true"></i>
                    )}

                </button>
            </div>
        </div>
    </header>;
}

export default Header