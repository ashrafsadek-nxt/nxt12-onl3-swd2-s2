import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">OMAR</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Register</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;

