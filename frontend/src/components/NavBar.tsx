import classNames from "classnames";
import { FaFeatherAlt } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import Button from "./resuable/Button";

function NavBar() {
    const links = classNames(
        "hidden sm:flex gap-2 font-semibold text-sm justify-center items-center", 
        "sm:gap-5 sm:text-md",
        "md:gap-8"
    );
    return (
        <div className="flex items-center p-4 bg-dark text-gray-200 justify-between">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
                <FaFeatherAlt className="text-2xl" />
                <h1 className="text-2xl font-bold">BlogSpace</h1>
            </Link>
            <div className="flex items-center justify-center">
                <div className={links}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
                <Link to={"/create"}>
                    <Button primary>
                        Create Blog
                    </Button>
                </Link>
            </div>
        </div>
    );
}
export default NavBar;
