import "./style.css"
import Delete from "../../assets/delete.png"
import Checkout from "../../assets/checkout.png"

function Cart() {
  const cart2 = [{ id: 1, title: "1", amount: 100 }]

  const total = 30000

  const cart = {
    id: {
      count: 1,
      title: "Hellfire",
      thumbnail:
        "https://media.wired.com/photos/5bdb5fff134e755d734f7eeb/master/pass/Dany-Jon-GOT.jpg",
    },
  }

  return (
    <div className="card list">
      {Object.keys(cart).map((key) => {
        const product = cart[key]

        const { title, thumbnail, count, amount } = product

        return (
          <div className="movi-cart" key={thumbnail}>
            <div className="row-x">
              <img src={thumbnail} height="100px" width="60px" />
              <span className="movie-name">{title}</span>
            </div>

            <div className="calu">
              x {count} = {count * amount}
            </div>

            <button onClick={() => {}} className="btn">
              Remove <img src={Delete} height="22px" />
            </button>
          </div>
        )
      })}

      <h4>Total: {total}</h4>

      <button className="btn">
        Checkout <img height="22px" src={Checkout} />
      </button>
    </div>
  )
}

export default Cart
