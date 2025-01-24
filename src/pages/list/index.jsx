import "./style.css"
import AddToCart from "../../assets/add.png"

function List({ onCartClick, movies = [] }) {
  const data = [{ id: 1, title: "1", amount: 2000 }]

  function handleAddToCart(movie) {}

  return (
    <div className="movie-list">
      {!!movies &&
        movies?.map((movie) => {
          const { title, thumbnail_width, thumbnail } = movie

          return (
            <div className="movie-card" key={thumbnail}>
              <img width="140px" height="170px" src={thumbnail} />
              <span>{title}</span>
              <div className="cart-btn">
                <button className="cart-srap" onClick={handleAddToCart}>
                  <span> Add to Cart</span>{" "}
                  <img src={AddToCart} height="22px" />
                </button>
              </div>
              <span>INR {thumbnail_width}</span>
            </div>
          )
        })}
    </div>
  )
}

export default List
