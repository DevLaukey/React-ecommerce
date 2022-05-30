
import React, { useContext } from "react";
import "../App.css";
import { CardContext } from "../Contexts/CardContext";
import TransitionsModal from "./Modal";



function Content() {
  const {count, setCount, setOpen, setIsEmpty} = useContext(CardContext);
 
console.log(typeof(count))
  const handleOpenPicModal = () => {
    console.log("destructured")
  };
  const handleMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const countClicks = () => {
    setOpen(true);
    // setCount(count + 1);
    setIsEmpty(false);
  };
  return (
    <div class="content">
      <div class="images" onClick={handleOpenPicModal}>
        <div class="image">
          <img
            class="big-pic"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-1.jpg"
            alt=""
          />
        </div>
        <div class="slider">
          <div class="arrow">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div class="arrow">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div>
        
          <TransitionsModal />
        </div>
        
        <div class="thumbnails">
          <img
            class="thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-1-thumbnail.jpg"
            alt=""
          />

          <img
            class="thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-2-thumbnail.jpg"
            alt=""
          />

          <img
            class="thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-3-thumbnail.jpg"
            alt=""
          />
          <img
            class="thumbnail"
            src="https://devlaukey.github.io/ecommerce-design/assets/image-product-4-thumbnail.jpg"
            alt=""
          />
        </div>
      </div>

      <div class="details">
        <p class="name">SNEAKER COMPANY</p>
        <h3 class="big-text">Fall Limited Edition Sneakers</h3>
        <p class="light-text">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div class="mobile-price">
          <div class="price">
            <p class="money">$125.00</p>
            <p class="discount">50%</p>
          </div>
          <p class="strike">
            <s> $250.00</s>
          </p>
        </div>
        <div class="checkout">
          <div class="controls">
            <p class="control" onClick={handleMinus}>
              -
            </p>
            <p class="count">{count}</p>
            <p
              class="control"
              onClick={() => {  
                setCount(count + 1);
              }}
            >
              +
            </p>
          </div>
          <button class="btn" onClick={countClicks}>
            <div class="center">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fefefe"
                  fill-rule="nonzero"
                />
              </svg>
              <p class="white-text">Add to cart</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
