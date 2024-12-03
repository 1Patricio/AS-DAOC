import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ProdutoPageId.css";


function ProdutoPageId() {
    const parms = useParams()
    const [product, setProduct] = useState({}) 

    async function getProductById() {
        const response = 
                await fetch(`http://localhost:3001/products/${parms.id}`)
        const product = await response.json(); 
        setProduct(product)       
    }

    useEffect(() => {
        getProductById()
    }, [])

    return <div className="product-card">
    <h1>Produto:</h1> 
    <p>{product.title}</p>
    <h1>Preço:</h1>
    <p>R$ {product.price}</p>
    <h1>Descrição:</h1>
    <p>{product.description}</p>
    <img src={product.images}/>
    </div>
}

export default ProdutoPageId;