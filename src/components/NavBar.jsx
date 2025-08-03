import Logo from "./Logo";
import Nav from "./Nav";

const NavBar = () => {
    return (
        <div
            className="flex justify-between items-center p-3 bg-green-700
        text-white  shadow-md shadow-gray-300"
        >
            <Logo />
            <Nav />
        </div>
    );
};

export default NavBar;
