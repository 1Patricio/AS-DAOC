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
            <input name="titulo" placeholder="Descrição" required />
            <input name="price" placeholder="Preço" required />
            <input name="description" placeholder="Descrição" required />
            <input name="images" placeholder="Foto (URL)" required />
            <button type="submit">Cadastrar</button>
        </form>
    </>
}
export default ProdutoCadastrar;