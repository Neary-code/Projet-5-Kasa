import logo from "../assets/images/logo-header.png";

function Navbar() {
    const menu = ['Acceuil', 'A propos'];

    return (
        <div className="navbar">
            <div className="logo-header">
                <img src={logo} alt="Logo Kasa" className="logo-header" />
            </div>
            <ul>
                {menu.map((onglet, index) => (
                    <li key={index}>{onglet}</li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;
