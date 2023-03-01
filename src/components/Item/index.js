import styles from './Item.module.scss';
import {
    AiFillHeart,
    AiOutlineHeart
} from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';

const iconeProps = {
    size: 24,
    color: '#041833'
};

const Item = (props) => {
    const {
        titulo,
        descricao,
        foto,
        preco,
        favorito
    } = props

  return (
    <div className={styles.item}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={descricao} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
            <div className={styles['item-preco']}>
                R$ {preco.toFixed(2)}
            </div>
            <div className={styles['item-acoes']}>
                {favorito
                    ? <AiFillHeart {...iconeProps} color="#FF0000" className={styles['item-acao']} />
                    : <AiOutlineHeart {...iconeProps} className={styles['item-acao']} />
                }
                <FaCartPlus
                    {...iconeProps}
                    color={true ? '#1875E8' : iconeProps.color}
                    className={styles['item-acao']}
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Item
