import "./style.css"
import Cart from "../../assets/cart.png"
import Redux from "../../assets/redx.png"
import ReactPNG from "../../assets/react.webp"

function Nav({ onCartClick }) {
  const numberOfItems = 30000
  return (
    <div className="nav">
      <div className="nav-dex">
        <span>Anatomy of </span> <img src={Redux} height="22px" /> Redux and RTK
        with <img src={ReactPNG} height="22px" /> By Frontend Master
      </div>

      <button className="img-btn" onClick={onCartClick}>
        <span> Cart {numberOfItems}</span> <img src={Cart} height="22px" />
      </button>
    </div>
  )
}

export default Nav
