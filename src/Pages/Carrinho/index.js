import Header from 'components/Header';
import styles from './Carrinho.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import Item from 'components/Item';
import { zerarCarrinho } from 'Store/Reducers/carrinho';

const Carrinho = () => {
  const dispatch = useDispatch()

  const {carrinho, total} = useSelector(state => {
    let total = 0
    const regExp = new RegExp(state.busca, 'i')
    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find(item => item.id === itemNoCarrinho.id);
      total += (item.preco * itemNoCarrinho.quantidade)
      if(item.titulo.match(regExp)){
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade
        });
      }
      return itens
    }, []);
    return {
      carrinho: carrinhoReduce,
      total
    }
  })

  return (
    <div>
      <Header
        titulo='Carrinho de compras'
        descricao='Confira produtos que você adicionou ao carrinho'
      />
      <div className={styles.carrinho}>
        {carrinho?.map(item => <Item key={item.id} {...item} carrinho />)}
        <div className={styles.total}>
          <strong>
            Resumo da compra
          </strong>
          <span>
            Subtotal: <strong>{total.toFixed(2)}</strong>
          </span>
        </div>
        <button className={styles.finalizar} onClick={() => dispatch(zerarCarrinho()) }>
          Finalizar compra
        </button>
      </div>
    </div>
  )
}

export default Carrinho
