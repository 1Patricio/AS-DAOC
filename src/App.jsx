import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/header/Header";
import ProdutoCadastrar from "./pages/CadastrarProduto/ProdutoCadastroPage";
import ProdutosPage from "./pages/Produtos/ProdutosPage";
import HomePage from "./pages/HomePage/HomePage";
import ProdutoPageId from "./pages/Produtos/ProdutoPageId";
import ProdutoPageEdit from "./pages/Produtos/ProdutosPageEdit";

function App(){
  return(
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/produto/cadastrar" element={<ProdutoCadastrar />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/produtos/:id" element={<ProdutoPageId />} />
        <Route path="/produtos/edit/:id" element={<ProdutoPageEdit     />} />

        <Route path="*" element={<h1>Tratativa de Erro para Página não Encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;