import { useNavigate } from "react-router";
import "./HomePage.css"

function HomePage() {
    const navigation = useNavigate()

    function navegar() {
        navigation("/produto/cadastrar")
    }

    return <div className="buttonHome">
        <button onClick={navegar}>Cadastre seu Produto!</button>
        {/* {data.map()} */}
        </div>
}

export default HomePage;