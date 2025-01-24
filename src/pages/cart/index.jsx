import "./style.css"
import Delete from "../../assets/delete.png"
import Checkout from "../../assets/checkout.png"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../../store/actions/movie-list"

function Cart() {
  const basket = useSelector((state) => state.cart)
  let sum = 0

  const dispatch = useDispatch()

  const total = 30000

  const handleDelete = (id) => {
    return () => {
      dispatch(removeFromCart(id))
    }
  }

  return (
    <div className="card list">
      {Object.keys(basket).map((key) => {
        const cart = basket[key]
        const product = cart.value
        console.log(product)

        const { title, thumbnail, thumbnail_width: amount } = product

        return (
          <div className="movi-cart" key={thumbnail}>
            <div className="row-x">
              <img src={thumbnail} height="100px" width="60px" />
              <span className="movie-name">{title}</span>
            </div>

            <div className="calu">
              x {cart.count} = {cart.count * amount}
            </div>

            <button onClick={handleDelete(key)} className="btn">
              Remove <img src={Delete} height="22px" />
            </button>
          </div>
        )
      })}

      <h4>Total: {sum}</h4>

      <button className="btn">
        Checkout <img height="22px" src={Checkout} />
      </button>
    </div>
  )
}

export default Cart
