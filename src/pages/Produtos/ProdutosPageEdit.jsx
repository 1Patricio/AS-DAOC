import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function ProdutoPageEdit() {
    const [product, setProduct] = useState(null); // Estado para armazenar o produto
    const { id } = useParams(); // Obtem o ID da URL
    const navigate = useNavigate(); // Navegação para outras páginas

    // Função para buscar o produto pelo ID
    async function getProductById() {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        const productData = await response.json();
        setProduct(productData);
    }

    // Hook useEffect para buscar os dados quando o componente carregar
    useEffect(() => {
        getProductById();
    }, [id]); // Dependência do ID

    // Função para editar o produto
    async function editProduct(product) {
        await fetch(`http://localhost:3001/products/${id}`, {
            method: "PUT", // Usar PUT para atualizar o produto
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

        navigate("/produtos"); // Redireciona para a página de produtos
    }

    // Função chamada ao enviar o formulário
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const updatedProduct = {
            title: formData.get("title"),
            price: formData.get("price"),
            description: formData.get("description"),
            images: [formData.get("images")], // Corrigido para array de imagens
        };

        editProduct(updatedProduct); // Chama a função para salvar as alterações
    }

    // Renderiza um loader enquanto os dados do produto não estão disponíveis
    if (!product) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <h1>Editar Produto</h1>
            <form onSubmit={handleSubmit}>
                <input name="title" defaultValue={product.title} placeholder="Nome" />
                <input name="price" defaultValue={product.price} placeholder="Preço" />
                <input
                    name="description"
                    defaultValue={product.description}
                    placeholder="Descrição"
                />
                <input
                    name="images"
                    defaultValue={product.images[0]}
                    placeholder="Foto (URL)"
                />
                <button type="submit">Salvar Alterações</button>
            </form>
        </>
    );
}

export default ProdutoPageEdit;
