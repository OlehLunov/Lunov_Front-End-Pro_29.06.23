import "../Header/Header.css"


function Header() {
return (

    <nav className="header__nav">
        <ul className="header_list">
            <li className="header__item">
                <a href="#" className="header__item-link">Menu1</a>
            </li>
            <li className="header__item">
                <a href="#" className="header__item-link">Menu2</a>
            </li>
            <li className="header__item">
                <a href="#" className="header__item-link">Menu3</a>
            </li>
            <li className="header__item">
                <a href="#" className="header__item-link">Menu4</a>
            </li>
        </ul>
    </nav>
)
}
export default Header;