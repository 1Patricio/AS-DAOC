import { NavLink } from "react-router";
import "./Header.css";

function Header() {

    return (
        <header className="container">
            <div className="container-logo">
                <img src="https://img.freepik.com/vetores-premium/logotipo-da-loja-de-moveis-elegantes_23-2148455883.jpg?w=740" alt="" />
                
            </div>

            <nav>
                <ul className="nav">
                    <li>
                        <NavLink
                            to={"/home"}
                            className={({ isActive }) => (isActive ? "selected" : "")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <p>|</p>
                    <li>
                        <NavLink
                            to={"/produto/cadastrar"}
                            className={({ isActive }) => isActive ? "selected" : ""}
                        >
                            Cadastrar Produto
                        </NavLink>
                    </li>
                    <p>|</p>
                    <li>
                        <NavLink
                            to={"/sobre"}
                            className={({ isActive }) => isActive ? "selected" : ""}
                        >
                            Sobre
                        </NavLink>
                    </li>
                    <p>|</p>
                    <li>
                        <NavLink
                            to={"/produtos"}
                            className={({ isActive }) => isActive ? "selected" : ""}
                        >
                            Produtos
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
export default Header;