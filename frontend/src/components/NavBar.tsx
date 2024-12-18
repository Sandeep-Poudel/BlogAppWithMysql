import classNames from "classnames";
import { FaFeatherAlt } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
    const links = classNames(
        "flex gap-2 font-semibold text-md justify-center items-center",
        "sm:gap-5",
        "md:gap-8"
    );
    return (
        <div className="flex items-center p-4 bg-dark text-gray-200 justify-between">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
                <FaFeatherAlt className="text-2xl" />
                <h1 className="text-2xl font-bold">BlogSpace</h1>
            </Link>
            <div className={links}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <Link to={"/create"}>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-md  ml-4">
                        Create Blog
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default NavBar;
