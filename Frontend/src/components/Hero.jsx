import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      
      <div className="hero-left">
        <span className="hero-badge">
          🚚 Fast Grocery Delivery
        </span>

        <h1>
          Fresh Groceries <br />
          Delivered To Your <span>Doorstep</span>
        </h1>

        <p>
          Order fresh fruits, vegetables, dairy products and daily
          essentials with super fast delivery at affordable prices.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn">
            Shop Now <FaArrowRight />
          </button>

          <button className="explore-btn">
            Explore Products
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>

          <div>
            <h3>500+</h3>
            <p>Fresh Products</p>
          </div>

          <div>
            <h3>30 Min</h3>
            <p>Fast Delivery</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://cdn.apartmenttherapy.info/image/upload/v1561242428/stock/shutterstock_373602469.jpg"
          alt="Grocery"jpe
        />
      </div>

    </section>
  );
}

export default Hero;