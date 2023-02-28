import Header from "components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const Categoria = () => {
    const { categoriaId } = useParams()
    const categoria = useSelector(state => state.categorias.find(categoria => categoria.id === categoriaId) )
  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.thumbnail}
       />
    </div>
  )
}

export default Categoria
