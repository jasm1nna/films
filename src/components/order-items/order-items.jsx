import './order-items.css'
import { FaDeleteLeft } from "react-icons/fa6";
import {deleteItemsFromCard} from '../../redux/cart/cart'
import { useDispatch, useSelector } from 'react-redux';

export default function OrderItem({ film }) {


    const dispatch = useDispatch()

    return (
        <div className='order-item'>
            <div className='resp_order'>
                <div className='order-item_cover'>
                    <img className="order-item_image" src={film.image} alt={film.title} />
                </div>
                <dir className='order-item_title'>
                    <span className='film_title'>{film.title}</span>
                    <div>
                        <span className='order-item_genres'>Жанр:</span>
                        <span className='order-item_genre'>{film.genres}</span>
                    </div>
                    <h1 className='order-item_genres'>Описание:</h1>
                    <p className='order-item_genre'>{film.description}</p>
                </dir>
                <div>
                <p className='order-item_price'>цена {film.price} сом</p>
                <FaDeleteLeft size={20} onClick={() => dispatch(deleteItemsFromCard(film.id))}/>
                </div>
            </div>
        </div>
    )
}