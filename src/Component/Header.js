import { Link } from "react-router-dom";
function Header(props) {

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid pt-2 pb-2">
                {window.location.href.includes("/list")?<Link to="/">BACK</Link>:"SAMPLEAPP"}
            </div>
        </nav>
    );
}

export default Header;