import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../asstets/logo.png"
import { navitems } from '../Data/data'

// مكون قابل لإعادة الاستخدام لعرض عناصر التنقل
const NavItems = ({ className, onClick }) => {
    return (
        <ul className={className}>
            {navitems.map((item, index) => (
                <li key={index} className={className.includes("flex") ? "" : "py-4"}>
                    <a href={item.href} onClick={onClick}>
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );
};

// مكون قابل لإعادة الاستخدام للأزرار
const AuthButtons = ({ className, onClick }) => {
    return (
        <div className={className}>
            <a href="#" className="py-2 px-3 border rounded-md" onClick={onClick}>
                Sign In
            </a>
            <a
                href="#"
                className="bg-linear-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                onClick={onClick}
            >
                Create an account
            </a>
        </div>
    );
};

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const closeNavbar = () => {
        setMobileDrawerOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>

                    {/* شريط التنقل لشاشات كبيرة - أفقي */}
                    <div className="hidden lg:flex items-center space-x-12">
                        <NavItems className="flex ml-14 space-x-12" />
                        <AuthButtons className="flex justify-center space-x-12 items-center" />
                    </div>

                    {/* زر القائمة للجوال */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {/*dark wihte themes*/}

                {/* القائمة المتنقلة للجوال - عمودي */}
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <NavItems className="" onClick={closeNavbar} />
                        <AuthButtons className="flex space-x-6 mt-4" onClick={closeNavbar} />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;