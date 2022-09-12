import Navigation from "./Navigation/Navigation";

import s from "./navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className="container">
                <div className={s.row}>
                    <Navigation />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;