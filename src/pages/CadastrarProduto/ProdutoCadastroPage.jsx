import { useState } from "react";
import { useNavigate } from "react-router";
import "./ProdutoCadastroPage.css"


function ProdutoCadastrar() {
    const navigation = useNavigate()

    async function saveProduct(product) {
        await fetch("http://localhost:3001/products", {
            method: "POST",
            body: JSON.stringify(product)
        })

        navigation("/produtos")
    }

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        const produto = {
            titulo: formData.get("title"), 
            price: formData.get("price"),
            description: formData.get("description"),
            images: formData.get("images"),
        }
        saveProduct(produto)
    }
    return <> 
        <form onSubmit={handleSubmit}>
            <input name="titulo" placeholder="Descrição" />
            <input name="price" placeholder="Preço" />
            <input name="description" placeholder="Descrição" />
            <input name="images" placeholder="Foto (URL)" />
            <button type="submit">Editar</button>
        </form>
    </>
}
export default ProdutoCadastrar;