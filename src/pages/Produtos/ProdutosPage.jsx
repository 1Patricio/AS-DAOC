import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./ProdutosPage.css"


function ProdutosPage() {
    const urlApi = "http://localhost:3001/products"
    const [produtos, setProdutos] = useState([])
    const navigation = useNavigate()

    async function getAllProducts() {
        const response = await fetch(urlApi)
        const produtos = await response.json()

        setProdutos(produtos)
    }

    async function deleteProduct(id) {
        await fetch(`${urlApi}/${id}`, {
            method: "DELETE"
        })

        getAllProducts()
        
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    return <div>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Preço</th>
                <th>Foto</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {produtos.map(cadaProduto => (
                <tr key={cadaProduto.id}>
                    <td>{cadaProduto.id}</td>
                    <td>{cadaProduto.title}</td>
                    <td>R$ {cadaProduto.price}</td>
                    <td>
                        <img src={cadaProduto.images[0]} alt={cadaProduto.title} />
                    </td>
                    <td>
                        <button onClick={() => deleteProduct(cadaProduto.id)}>Deletar</button>
                        <button onClick={() => navigation(`/produtos/${cadaProduto.id}`)}>
                            Visualizar
                        </button>
                        <button onClick={() => navigation(`/produtos/edit/${cadaProduto.id}`)}>
                            Editar
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
}

export default ProdutosPage;