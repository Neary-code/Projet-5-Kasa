import logo from "../assets/images/logo-header.png";

function Navbar() {
    const menu = ['Accueil', 'A propos'];

    return (
        <div className="navbar">
            <div className="logo-header">
                <img src={logo} alt="Logo Kasa" className="logo-header" />
            </div>
            <ul>
                {menu.map((onglet, index) => (
                    <li 
                        key={index} 
                        className={onglet === 'Accueil' ? 'menu-accueil' : 'menu-apropos'}
                    >
                        {onglet}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;

