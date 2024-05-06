import CartItems from '../cart-item/cart-items'
import './cart-menu.css'
import Button from '../button/button'
import { calctotalPrice } from '../utils'


export default function CartMenu({ items  , hadleClick}) {

    return (
        <div className='cart-menu'>
            <div className='cart-menu__film-list'>
                {
                    items.length > 0 ? items.map(film => <CartItems film={film} />) : 'Корзина пуста'
                }
                {
                    items.length > 0 ? (
                        <div className='cart-modal'>
                            <div className='cart-modal__total-price'>
                                <span>Итого:</span>
                                <span>{calctotalPrice(items)} сом</span>
                            </div>
                            <Button onClick={hadleClick} type="primary" size='m'>
                                Оформить заказ
                            </Button>
                        </div>
                    ) : ""
                }
            </div>
        </div>
    )
}