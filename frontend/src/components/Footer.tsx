import classNames from "classnames";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

function Footer({...rest}:FooterProps) {
    const outerDiv = classNames(
        "bg-dark text-gray-400 py-4 px-6 flex justify-between items-center h-16 mt-6 bottom-0 w-full",
        rest.className
    )
    return (
        <footer className={outerDiv}>
            <div className="text-sm">
                © 2024 BlogSpace. All rights reserved.
            </div>
            <div className="flex gap-4 text-gray-200">
                <Link to="https://facebook.com/sandeep.poudel.2059">
                    <FaFacebook fontSize={"1.2rem"} />
                </Link>
                <Link to="https://x.com/poudel_sandeep_" aria-label="Twitter">
                    <FaTwitter fontSize={"1.2rem"} />
                </Link>
                <Link
                    to="https://instagram.com/poudel_sandeep_"
                    aria-label="Instagram"
                >
                    <FaInstagram fontSize={"1.2rem"} />
                </Link>
            </div>
        </footer>
    );
}
export default Footer;
