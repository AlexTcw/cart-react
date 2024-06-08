import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../Icons.jsx'
import { useCart } from '../../hooks/useCart.js'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

        <aside className='cart bg-[#857e7e] rounded-l-2xl z-20 flex flex-col'>
            <div className="overflow-auto flex-grow max-h-[500px] h-[500px]">
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>
            </div>

            <button className={"mt-2"} onClick={clearCart}>
                <ClearCartIcon/>
            </button>
        </aside>
    </>
  )
}
